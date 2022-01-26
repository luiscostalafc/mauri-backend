import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'
type MailData = {
  to: string
  subject: string
  view: string
  data: object
  from?: string
  preview?: boolean
}
export async function sendMail({ to, subject, view, data, from, preview }: MailData) {
  const fromMail = from ?? (Env.get('FROM_MAIL') as string)
  await Mail.sendLater((message) => {
    message.from(fromMail).to(to).subject(subject).htmlView(view, data)
  })

  if (preview) {
    const { url } = await Mail.preview((message) => {
      message.from(fromMail).to(to).subject(subject).htmlView(view, data)
    })
  }
}

export async function sendResetPasswordMail({ to, subject, data }: Omit<MailData, 'view'>) {
  const fromMail = Env.get('FROM_MAIL') as string
  const mail = Mail.use('smtp')
  await mail.send((message) => {
    message.from(fromMail).to(to).subject(subject).html(`
      <h1>Caro, ${data.user}</h1>,</br></br>
      <h4>Acesse este <a href='${data.link}'>link</a> para recuperar sua senha</h4>
    `)
  })
}
