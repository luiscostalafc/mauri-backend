/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PhonesRepository from 'App/Repositories/PhonesRepository'
import { getErrors } from 'App/Services/MessageErros'
import { PhoneSchema } from 'App/Validators'
import { PhoneSearchSchema } from 'App/Validators/PhoneSearchSchema'

export default class PhonesController {
  constructor (private readonly repository = PhonesRepository) {}

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: PhoneSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .status(422)
        .json({
          returnType: 'error',
          message: 'Erro na validação',
          messageErrors: msg,
        })
    }

    const register = await this.repository.create(request.all())
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async search ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: PhoneSearchSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .status(422)
        .json({
          returnType: 'error',
          message: 'Erro na validação',
          messageErrors: msg,
        })
    }

    const register = await this.repository.search(request.all())
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async show ({ params, response }: HttpContextContract) {
    const register = await this.repository.find(params.id)
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async update ({ params, request, response }: HttpContextContract) {
    try {
      await request.validate({schema: PhoneSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .status(422)
        .json({
          returnType: 'error',
          message: 'Erro na validação',
          messageErrors: msg,
        })
    }

    const register = await this.repository.findAndUpdate(params.id, request.all())
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async destroy ({ params, response }: HttpContextContract) {
    const register = await this.repository.findAndDelete(params.id)
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }
}
