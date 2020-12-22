import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ResetPasswordSchema = schema.create({
  email: schema.string({}, [
    rules.email(),
    rules.unique({ table: 'users', column: 'email' }),
  ]),
  token: schema.string({}),
})
