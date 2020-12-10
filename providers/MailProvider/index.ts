// import { SES } from 'aws-sdk';
import { container } from 'tsyringe'
import mailConfig from 'config/mail'

import MailProvider from 'providers/MailProvider/models/MailProvider'

import EtherealMailProvider from './implementations/EtherealMailProvider'
import SESMailProvider from './implementations/SESMailProvider'

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
}

container.registerInstance<MailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
)
