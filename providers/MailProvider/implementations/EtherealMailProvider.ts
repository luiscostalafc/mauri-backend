import nodemailer, { Transporter } from 'nodemailer'
import { inject, injectable } from 'tsyringe'

import MailTemplateProvider from 'providers/MailTemplateProvider/models/MailTemplateProvider'
import MailProvider from 'providers/MailProvider/models/MailProvider'
import SendMailDTO from '../dtos/SendMailDTO'

@injectable()
export default class EtherealMailProvider implements MailProvider {
  private client: Transporter

  constructor (
    @inject('MailTemplateProvider')
    private mailTemplateProvider: MailTemplateProvider,
  ) {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      })

      this.client = transporter
    })
  }

  public async sendMail ({
    to,
    from,
    subject,
    templateData,
  }: SendMailDTO): Promise<void> {
    const message = await this.client.sendMail({
      from: {
        name: from?.name || 'Equipe Liconnection',
        address: from?.email || 'equipe@liconnection.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    })

    console.log('Message sent: %s', message.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
  }
}
