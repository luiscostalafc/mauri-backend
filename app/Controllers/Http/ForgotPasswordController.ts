/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getToken } from 'App/Services/auth'
import { sendMail } from 'App/Services/MailService'
import { getErrors } from 'App/Services/MessageErros'
import { ForgotPasswordSchema } from 'App/Validators'

export default class ForgotPasswordController {
  constructor (private readonly repository = UsersRepository) {}

  async store ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: ForgotPasswordSchema})
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

    const { email, name, password } = request.all()

    const reqUser = await this.repository.findByEmail(email)
    const { data, statusCode, returnType, message, contentError } = reqUser

    const tokenData = await getToken(email, password, auth)
    const token = tokenData?.data?.token ? tokenData.data.token : ''

    if (returnType === 'success') {
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
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }
}
