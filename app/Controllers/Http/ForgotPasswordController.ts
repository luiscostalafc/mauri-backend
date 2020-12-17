/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getToken } from 'App/Services/auth'
import { getErrors } from 'App/Services/MessageErros'
import { ForgotPasswordSchema} from 'App/Validators'
import path from 'path'
import MailProvider from 'providers/MailProvider/models/MailProvider'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class ForgotPasswordController {
  private readonly repository
  constructor (
    @inject('MailProvider')
    private mailProvider: MailProvider,
  ) {
    this.repository = UsersRepository
  }

  async store ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: ForgotPasswordSchema})
    } catch (error) {
      const msg = getErrors(error)
      // console.log(error.messages.errors)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    await this.repository.create(request.all())
    const { email, name, password } = request.all()

    const reqUser = await this.repository.findByEmail(email)
    const { data, statusCode, returnType, message, contentError } = reqUser

    const tokenData = await getToken(email, password, auth)
    const token = tokenData?.data?.token ? tokenData.data.token : ''

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      './../Services/',
      'views',
      'forgot_password.hbs',
    )

    await this.mailProvider.sendMail({
      to: {
        name: name,
        email: email,
      },
      subject: '[Liconnection] Recuperação de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: name,
          link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`,
        },
      },
    })

    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }
}
