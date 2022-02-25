/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MercadoPagoTransactions from 'App/Repositories/MercadoPagoTransactions'
import OrderDetailsRepository from 'App/Repositories/OrderDetailsRepository'
import MercadoPagoPreferencesService from '../../Services/mercadopago/preferences'
import { generateRandomId } from 'App/utils/createRandomId'
import OrdersRepository from 'App/Repositories/OrdersRepository'
import OrderDetail from 'App/Models/OrderDetail'
import OrderHasProduct from 'App/Models/OrderHasProduct'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class MercadopagoPreferenceController {
  constructor(private readonly preferenceService = MercadoPagoPreferencesService) {}

  async createPreference({ request, response }: HttpContextContract) {
    const { totalAmount, items, user } = request.all()
    const parsedUser = JSON.parse(user)
    const preferenceReference = generateRandomId()

    const preferenceData = {
      items: items,
      external_reference: preferenceReference,
    }

    const orderData = {
      order_status_id: 1,
      provider_id: 1,
      delivery_id: 1,
      user_id: parsedUser.id,
    }
    const createdOrder = await OrdersRepository.create(orderData)

    const orderHasProductsData = items.map((product) => ({
      product_id: product.product_id,
      quantity: product.quantity,
      amount: product.unit_price * product.quantity,
      order_id: createdOrder.data.id,
    }))

    await OrderHasProduct.createMany(orderHasProductsData)

    const orderDetail = {
      reference: preferenceReference,
      payment_method: 'mercadopago',
      order_status: 'pending',
      extra_amount: totalAmount,
      intallment_quantity: 1,
      intallment_value: totalAmount,
      order_id: createdOrder.data.id,
    }

    await OrderDetailsRepository.create(orderDetail)
    const createdPreference = await this.preferenceService.createPreferenceMP(preferenceData, {})

    await this._sendEmailWithOrder({
      username: parsedUser.name,
      order_id: createdOrder.data.id,
      totalAmount,
    })
    return response.status(201).json(createdPreference)
  }

  async registerReturn({ request, response }: HttpContextContract) {
    const { status, external_reference, payment_type } = request.all()

    const orderDetailToUpdate = await OrderDetail.findBy('reference', external_reference)
    await orderDetailToUpdate?.merge({ order_status: status, payment_method: payment_type })
    await orderDetailToUpdate?.save()

    const data = {
      method: payment_type,
      response: JSON.stringify(request.all()),
    }
    await MercadoPagoTransactions.createTransaction(data)

    return response.status(200).send('ok')
  }

  async notifyPayment({ request, response }: HttpContextContract) {
    const data = request.all()
  }

  private async _sendEmailWithOrder(data) {
    await Mail.sendLater((message) => {
      message
        .from('vendas@liconnection.com')
        .to('mauri@mauri.com')
        .subject('Nova compra no liconnection!').html(`
        <h1>Novo pedido</h1>
        <span>${data.username} comprou R$ ${data.totalAmount} em produtos</span> <br />
        <h3>Acesse este link para checar o pedido </h3><a href='${process.env.FRONTEND_URL}/admin/orders/details/${data.order_id}'>link</a>
      `)
    })
  }
}
