/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PermissionsRepository from 'App/Repositories/PermissionsRepository'
import { validationError } from 'App/Services/ResponseUtils'
import { PermissionSchema } from 'App/Validators'
import { PermissionSearchSchema } from 'App/Validators/PermissionSearchSchema'

export default class PermissionsController {
  constructor (private readonly repository = PermissionsRepository) {}

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    return response
      .status(register.statusCode)
      .json(register)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: PermissionSchema})
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
      await request.validate({schema: PermissionSearchSchema})
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
      await request.validate({schema: PermissionSchema})
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
