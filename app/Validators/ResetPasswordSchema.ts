import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ResetPasswordSchema = schema.create({
  name: schema.string.optional({}),
  type: schema.string.optional({}),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  token: schema.string({}),
})
