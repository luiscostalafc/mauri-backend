/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PhonesRepository from 'App/Repositories/PhonesRepository'
import { validationError } from 'App/Services/ResponseUtils'
import { PhoneSchema } from 'App/Validators'
import { PhoneSearchSchema } from 'App/Validators/PhoneSearchSchema'

export default class PhonesController {
  constructor (private readonly repository = PhonesRepository) {}

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    return response
      .status(register.statusCode)
      .json(register)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: PhoneSchema})
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
      await request.validate({schema: PhoneSearchSchema})
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
      await request.validate({schema: PhoneSchema})
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
