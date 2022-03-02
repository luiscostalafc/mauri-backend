/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Env from '@ioc:Adonis/Core/Env'
import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import { sendResetPasswordMail } from 'App/Services/MailService'
import { validationError } from 'App/Services/ResponseUtils'
import { ForgotPasswordSchema } from 'App/Validators'
import * as jwt from 'jsonwebtoken'

export default class ForgotPasswordController {
  constructor(private readonly repository = UsersRepository) {}

  async store({ request, response }: HttpContextContract) {
    try {
      await request.validate({ schema: ForgotPasswordSchema })
    } catch (error) {
      return response.status(422).json(validationError(error))
    }

    const { email } = request.all()

    const user = await this.repository.findByEmail(email)
    if (!user) {
      return response.status(400).send({ msg: 'User not found' })
    }
    const TOKEN_SECRET = user.data.email + user.data.password

    const token = await jwt.sign(user.data, TOKEN_SECRET)
    const baseUrl = Env.get('APP_WEB_URL') as string
    const link = `${baseUrl}/sign-up-activate?token=${token}&email=${user.data.email}`
    await sendResetPasswordMail({
      to: email,
      subject: '[Liconnection] Recuperação de senha',
      data: {
        user: user.data.name,
        link,
      },
    })
  }

  async ChangePassword({ request, response }: HttpContextContract) {
    const { token, newPassword, email } = request.all()

    const user = await this.repository.findByEmail(email)
    if (!user) {
      return response.status(400).send({ msg: 'User not found' })
    }
    const secret = user.data.email + user.data.password

    try {
      await jwt.verify(token, secret)
      const hashedPassword = await Hash.make(newPassword)

      await this.repository.updatePassword(email, hashedPassword)

      return response.status(200)
    } catch (error) {
      console.log(error.message)
      return response.status(500).send({ msg: 'Fail on reseting password, try again later.' })
    }
  }
}
