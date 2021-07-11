/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getToken } from 'App/Services/auth'
import { sendMail } from 'App/Services/MailService'
import { validationError } from 'App/Services/ResponseUtils'
import { ForgotPasswordSchema } from 'App/Validators'

export default class ForgotPasswordController {
  constructor (private readonly repository = UsersRepository) {}

  async store ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: ForgotPasswordSchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }

    const { email, name, password } = request.all()

    const register = await this.repository.findByEmail(email)

    const { data } = await getToken(email, password, auth)
    const token = data?.token ?? ''

    if (register?.data?.length) {
      const baseUrl = Env.get('APP_WEB_URL') as string
      const link = `${baseUrl}/sign-up-activate?token=${token}`
      await sendMail({
        to: email,
        subject: '[Liconnection] Recuperação de senha',
        view: 'emails/forgot_password',
        data: {
          name,
          link,
        },
      })
    }

    return response
      .status(register.statusCode)
      .json(register)
  }
}
