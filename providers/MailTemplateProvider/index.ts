import { container } from 'tsyringe'

import MailTemplateProvider from './models/MailTemplateProvider'

import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider'

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
}

container.registerSingleton<MailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
)
