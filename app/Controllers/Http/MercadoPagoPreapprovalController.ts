/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MercadoPagoRepository from 'App/Repositories/MercadoPagoRepository'
import MercadoPagoPreapprovalService from 'App/Services/mercadopago/preapproval'
import { validationError } from 'App/Services/ResponseUtils'
import {
  MercadoPagoPreapprovalCreateSchema,
  MercadoPagoPreapprovalSearchSchema,
  MercadoPagoPreapprovalUpdateSchema
} from 'App/Validators/MercadoPagoPreapprovalSchema'

export default class MercadoPagoPreapprovalController {
  constructor(
    private readonly repository = MercadoPagoRepository,
    private readonly service = MercadoPagoPreapprovalService
  ) {}

  async index({ request, response }: HttpContextContract) {
    const register = await this.service.getPreApprovalMP(request.input('customerId'))
    return response.json(register)
  }

  async store({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({ schema: MercadoPagoPreapprovalCreateSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const data = request.all() as typeof MercadoPagoPreapprovalCreateSchema
    const res = await this.service.createPreApprovalMP(data)

    const user = auth.user
    const register = await this.repository.create({
      request: request.all(),
      response: res,
      user,
    })

    return response.status(register.statusCode).json(register)
  }

  async show({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({ schema: MercadoPagoPreapprovalSearchSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const data = request.all() as typeof MercadoPagoPreapprovalSearchSchema
    const res = await this.service.pausePreApprovalMP(data)

    const user = auth.user
    const register = await this.repository.create({
      request: request.all(),
      response: res,
      user,
    })

    return response.status(register.statusCode).json(register)
  }

  async update({ params, request, response, auth }: HttpContextContract) {
    try {
      await request.validate({ schema: MercadoPagoPreapprovalUpdateSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const data = request.all() as typeof MercadoPagoPreapprovalUpdateSchema
    const res = await this.service.updatePreApprovalMP({ ...data, ...params })

    const user = auth.user
    const register = await this.repository.create({
      request: request.all(),
      response: res,
      user,
    })

    return response.status(register.statusCode).json(register)
  }

  async destroy({ params, response, auth }: HttpContextContract) {
    const res = await this.service.cancelPreApprovalMP(params.id)

    const user = auth.user
    const register = await this.repository.create({
      request: params,
      response: res,
      user,
    })

    return response.status(register.statusCode).json(register)
  }
}
