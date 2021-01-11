import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PhoneSearchSchema = schema.create({
  type: schema.string.optional(),
  area_code: schema.string.optional(),
  phone: schema.string.optional(),
  whatsapp: schema.boolean.optional(),
  inactive: schema.boolean.optional(),
  obs: schema.string.optional(),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
