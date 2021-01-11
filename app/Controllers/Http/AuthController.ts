import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getToken } from 'App/Services/auth'
import { getErrors } from 'App/Services/MessageErros'
import { AuthSchema } from 'App/Validators/AuthSchema'

export default class AuthController {
  private readonly repository
  constructor () {
    this.repository = UsersRepository
  }

  public async login ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: AuthSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const email = request.input('email')
    const password = request.input('password')

    const tokenData = await getToken(email, password, auth)

    const {returnType,message,contentError,status,data} = tokenData
    const token = data?.token ? data.token : ''

    const reqUser = await this.repository.findByEmail(email)
    const userData = reqUser?.data

    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(status)
      .json({token, user: userData})
  }

  public async logout ({ response, auth }: HttpContextContract) {
    await auth.use('api').logout()
    return response
      .safeHeader('returnType', 'success')
      .safeHeader('message', 'User logout')
      .safeHeader('contentError', '')
      .status(200)
      .json({})
  }
}
