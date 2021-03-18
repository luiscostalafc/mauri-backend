import { schema } from '@ioc:Adonis/Core/Validator'

export const ResetPasswordSchema = schema.create({
  name: schema.string.optional({}),
  type: schema.string.optional({}),
  token: schema.string({}),
  password: schema.string({}),
})
