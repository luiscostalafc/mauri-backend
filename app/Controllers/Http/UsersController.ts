/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getErrors } from 'App/Services/MessageErros'
import { UserSchema, UserUpdateSchema } from 'App/Validators'
import { UserSearchSchema } from 'App/Validators/UserSearchSchema'

export default class UsersController {
  constructor (private readonly repository = UsersRepository) {}

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
      await request.validate({schema: UserSchema})
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

    const register = await this.repository.createOrUpdate({ email: request.input('email') }, request.all())
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
      await request.validate({schema: UserSearchSchema})
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
      await request.validate({schema: UserUpdateSchema})
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
