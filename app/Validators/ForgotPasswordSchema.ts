import { schema } from '@ioc:Adonis/Core/Validator'

export const ForgotPasswordSchema = schema.create({
  email: schema.string(),
})
