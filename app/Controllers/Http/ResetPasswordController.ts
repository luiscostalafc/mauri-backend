/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getToken } from 'App/Services/auth'
import { getResponseInfo, validationError } from 'App/Services/ResponseUtils'
import { ResetPasswordSchema } from 'App/Validators'

export default class ResetPasswordController {
  constructor (private readonly repository = UsersRepository) {}

  async store ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: ResetPasswordSchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }

    await this.repository.create(request.all())
    const { email, password } = request.all()

    const register = await this.repository.findByEmail(email)

    const { data } = await getToken(email, password, auth)
    const token = data?.token ?? ''

    return response
      .status(register.statusCode)
      .json({
        token: token.toJSON(),
        info: getResponseInfo({
          contentError: register.info.contentError,
          statusCode: register.statusCode,
          typeFunction: "load"
        })
      })
  }
}
