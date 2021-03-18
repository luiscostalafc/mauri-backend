/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AddressesRepository from 'App/Repositories/AddressesRepository'
import { getErrors } from 'App/Services/MessageErros'
import { AddressSchema } from 'App/Validators'
import { AddressSearchSchema } from 'App/Validators/AddressSearchSchema'

export default class AddressesController {
  constructor (private readonly repository = AddressesRepository) {}

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
      await request.validate({schema: AddressSchema})
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

  async search ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: AddressSearchSchema})
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

  async update ({ params, request, response }: HttpContextContract) {
    try {
      await request.validate({schema: AddressSchema})
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
