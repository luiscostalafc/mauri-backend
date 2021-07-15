import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PhoneSchema = schema.create({
  type: schema.string.optional(),
  area_code: schema.string.optional(),
  phone: schema.string(),
  whatsapp: schema.boolean.optional(),
  inactive: schema.boolean.optional(),
  obs: schema.string.optional(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
