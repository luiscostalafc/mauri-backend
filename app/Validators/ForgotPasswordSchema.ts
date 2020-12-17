import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ForgotPasswordSchema = schema.create({
  email: schema.string({}, [
    rules.email(),
    rules.unique({ table: 'users', column: 'email' }),
  ]),

})
