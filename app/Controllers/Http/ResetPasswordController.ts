/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getToken } from 'App/Services/auth'
import { getErrors } from 'App/Services/MessageErros'
import { ResetPasswordSchema } from 'App/Validators'

export default class ResetPasswordController {
  constructor (private readonly repository = UsersRepository) {}

  async store ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: ResetPasswordSchema})
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

    await this.repository.create(request.all())
    const { email, password } = request.all()

    const reqUser = await this.repository.findByEmail(email)
    const { returnType, message, contentError } = reqUser

    const tokenData = await getToken(email, password, auth)
    const token = tokenData?.data?.token ? tokenData.data.token : ''

    return response
      .status(422)
      .json({
        token: token.toJSON(),
        returnType,
        message,
        contentError,
      })
  }
}
