/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MercadoPagoRepository from 'App/Repositories/MercadoPagoRepository'
import MercadoPagoMerchantOrderService from 'App/Services/mercadopago/merchant_orders'
import { validationError } from 'App/Services/ResponseUtils'
import { MercadoPagoMerchantOrderCreateSchema, MercadoPagoMerchantOrderUpdateSchema } from 'App/Validators/MercadoPagoMerchantOrderSchema'

export default class MercadoPagoMerchantOrderController {
  constructor(
    private readonly repository = MercadoPagoRepository,
    private readonly service = MercadoPagoMerchantOrderService
    ) {}

  async index({ request, response }: HttpContextContract) {
    const register = await this.service.get(request.input('customerId'))
    return response.json(register)
  }

  async store({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({ schema: MercadoPagoMerchantOrderCreateSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const data = request.all()
    const res = await this.service.create(data)
    
    const user = auth.user
    const register = await this.repository.create({
      request: request.all(),
      response: res,
      user
    })

    return response.status(register.statusCode).json(register)
  }

  async update({ params, request, response, auth }: HttpContextContract) {
    try {
      await request.validate({ schema: MercadoPagoMerchantOrderUpdateSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }
    
    const data = request.all()
    const res = await this.service.update({ ...data, ...params})
    
    const user = auth.user
    const register = await this.repository.create({
      request: request.all(),
      response: res,
      user
    })

    return response.status(register.statusCode).json(register)
  }
}
