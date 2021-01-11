/**
 * Config source: https://git.io/JvgAf
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import { MailConfig } from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

const mailConfig: MailConfig = {
  /*
  |--------------------------------------------------------------------------
  | Default mailer
  |--------------------------------------------------------------------------
  |
  | The following mailer will be used to send emails, when you don't specify
  | a mailer
  |
  */
  mailer: 'ses',

  /*
  |--------------------------------------------------------------------------
  | Mailers
  |--------------------------------------------------------------------------
  |
  | You can define or more mailers to send emails from your application. A
  | single `driver` can be used to define multiple mailers with different
  | config.
  |
  | For example: Postmark driver can be used to have different mailers for
  | sending transactional and promotional emails
  |
  */
  mailers: {
    smtp: {
      driver: 'smtp',
      host: Env.get('SMTP_HOST') as string,
      port: Env.get('SMTP_PORT') as string,
    },

    ses: {
      driver: 'ses',
      apiVersion: '2010-12-01',
      key: Env.get('SES_ACCESS_KEY') as string,
      secret: Env.get('SES_ACCESS_SECRET') as string,
      region: Env.get('SES_REGION') as string,
      sslEnabled: true,
      sendingRate: 10,
      maxConnections: 5,
    },

    mailgun: {
      driver: 'mailgun',
      baseUrl: 'https://api.mailgun.net/v3',
      key: Env.get('MAILGUN_API_KEY') as string,
    },

    sparkpost: {
      driver: 'sparkpost',
      baseUrl: 'https://api.sparkpost.com/api/v1',
      key: Env.get('SPARKPOST_API_KEY') as string,
    },
  },
}

export default mailConfig
