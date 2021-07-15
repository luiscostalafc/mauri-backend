/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DeliveriesRepository from 'App/Repositories/DeliveriesRepository'
import { validationError } from 'App/Services/ResponseUtils'
import { DeliverySchema } from 'App/Validators'
import { DeliverySearchSchema } from 'App/Validators/DeliverySearchSchema'

export default class DeliveriesController {
  constructor (private readonly repository = DeliveriesRepository) {}

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    return response
      .status(register.statusCode)
      .json(register)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: DeliverySchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }

    const register = await this.repository.create(request.all())
    return response
      .status(register.statusCode)
      .json(register)
  }

  async search ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: DeliverySearchSchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }

    const register = await this.repository.search(request.all())
    return response
      .status(register.statusCode)
      .json(register)
  }

  async show ({ params, response }: HttpContextContract) {
    const register = await this.repository.find(params.id)
    return response
      .status(register.statusCode)
      .json(register)
  }

  async update ({ params, request, response }: HttpContextContract) {
    try {
      await request.validate({schema: DeliverySchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }

    const register = await this.repository.findAndUpdate(params.id, request.all())
    return response
      .status(register.statusCode)
      .json(register)
  }

  async destroy ({ params, response }: HttpContextContract) {
    const register = await this.repository.findAndDelete(params.id)
    return response
      .status(register.statusCode)
      .json(register)
  }
}
