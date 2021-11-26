/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MercadoPagoRepository from 'App/Repositories/MercadoPagoRepository'
import MercadoPagoCardService from 'App/Services/mercadopago/card'
import { validationError } from 'App/Services/ResponseUtils'
import { MercadoPagoCardCreateSchema, MercadoPagoCardSearchSchema, MercadoPagoCardUpdateSchema } from 'App/Validators/MercadoPagoCardSchema'

export default class MercadoPagoCardController {
  constructor(
    private readonly repository = MercadoPagoRepository,
    private readonly service = MercadoPagoCardService
    ) {}

  async index({ request, response }: HttpContextContract) {
    const register = await this.service.getAll(request.input('customerId'))
    return response.json(register)
  }

  async store({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({ schema: MercadoPagoCardCreateSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const data = request.all() as typeof MercadoPagoCardCreateSchema
    const res = await this.service.create(data)
    
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
      await request.validate({ schema: MercadoPagoCardSearchSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const data = request.all() as typeof MercadoPagoCardSearchSchema
    const res = await this.service.find(data)
    
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
      await request.validate({ schema: MercadoPagoCardUpdateSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }
    
    const data = request.all() as typeof MercadoPagoCardUpdateSchema
    const res = await this.service.update({ ...data, ...params})
    
    const user = auth.user
    const register = await this.repository.create({
      request: request.all(),
      response: res,
      user
    })

    return response.status(register.statusCode).json(register)
  }

  async destroy({ params, response, auth }: HttpContextContract) {
    const res = await this.service.delete(params.id)
    
    const user = auth.user
    const register = await this.repository.create({
      request: params,
      response: res,
      user
    })

    return response.status(register.statusCode).json(register)
  }
}
