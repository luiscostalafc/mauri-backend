/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MercadoPagoRepository from 'App/Repositories/MercadoPagoRepository'
import MercadoPagoPaymentService from 'App/Services/mercadopago/payment'
import { validationError } from 'App/Services/ResponseUtils'
import { MercadoPagoPaymentCreateSchema, MercadoPagoPaymentSearchSchema, MercadoPagoPaymentUpdateSchema } from 'App/Validators/MercadoPagoPaymentSchema'

export default class MercadoPagoPaymentController {
  constructor(
    private readonly repository = MercadoPagoRepository,
    private readonly service = MercadoPagoPaymentService
    ) {}

  async index({ request, response }: HttpContextContract) {
    const register = await this.service.getPaymentMP(request.input('customerId'))
    return response.json(register)
  }

  async store({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({ schema: MercadoPagoPaymentCreateSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const data = request.all() as typeof MercadoPagoPaymentCreateSchema
    const res = await this.service.createPaymentMP(data)
    
    const user = auth.user
    const register = await this.repository.create({
      request: request.all(),
      response: res,
      user
    })

    return response.status(register.statusCode).json(register)
  }

  async show({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({ schema: MercadoPagoPaymentSearchSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const data = request.all() as typeof MercadoPagoPaymentSearchSchema
    const res = await this.service.capturePaymentByIdMP(data)
    
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
      await request.validate({ schema: MercadoPagoPaymentUpdateSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }
    
    const data = request.all() as typeof MercadoPagoPaymentUpdateSchema
    const res = await this.service.updatePaymentMP({ ...data, ...params})
    
    const user = auth.user
    const register = await this.repository.create({
      request: request.all(),
      response: res,
      user
    })

    return response.status(register.statusCode).json(register)
  }

  async destroy({ params, response, auth }: HttpContextContract) {
    const res = await this.service.deletePaymentMP(params.id)
    
    const user = auth.user
    const register = await this.repository.create({
      request: params,
      response: res,
      user
    })

    return response.status(register.statusCode).json(register)
  }
}
