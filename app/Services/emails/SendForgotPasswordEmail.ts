import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { injectable, inject } from 'tsyringe'

import User from '../../Models/User'

import path from 'path'

import AppError from 'errors/AppError'
import MailProvider from 'providers/MailProvider/models/MailProvider'

@injectable()
class SendForgotPasswordEmailService {
  constructor (
    @inject('MailProvider')
    private mailProvider: MailProvider,

  ) {}

  public async execute ({ request, auth }: HttpContextContract): Promise<void> {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)

    const usersRepository = User

    const user = await usersRepository.find(email)

    if (!user) {
      throw new AppError('User does not exists.')
    }

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    )

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[GoBarber] Recuperação de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`,
        },
      },
    })
  }
}

export default SendForgotPasswordEmailService
