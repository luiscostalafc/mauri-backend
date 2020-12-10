import MailProvider from 'providers/MailProvider/models/MailProvider'
import SendMailDTO from '../dtos/SendMailDTO'

export default class FakeMailProvider implements MailProvider {
  private messages: SendMailDTO[] = []

  public async sendMail (message : SendMailDTO): Promise<void> {
    this.messages.push(message)
  }
}
