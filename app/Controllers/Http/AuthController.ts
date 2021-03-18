import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getErrors } from 'App/Services/MessageErros'
import { AuthSchema } from 'App/Validators/AuthSchema'

export default class AuthController {
  constructor (private readonly repository = UsersRepository) {}

  public async login ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: AuthSchema})
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

    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)

    const reqUser = await this.repository.findByEmail(email)
    const userData = reqUser?.data

    return response
      .status(200)
      .json({
        token: token.toJSON(),
        user: userData,
        returnType: 'Success',
        message: 'Usuário Logado',
        contentError: [],
      })
  }

  public async logout ({ response, auth }: HttpContextContract) {
    try {
      await auth.use('api').logout()
      return response
        .status(200)
        .json({
          message: 'Usuário deslogado',
          contentError: [],
        })
    } catch (error) {
      const msg = getErrors(error)
      return response
        .status(422)
        .json({
          returnType: 'error',
          message: 'Erro na para fazer o deslog',
          messageErrors: msg,
        })
    }
  }
}
