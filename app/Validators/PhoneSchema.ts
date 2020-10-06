import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PhoneSchema = schema.create({
  type: schema.string(),
  //area_code: schema.string(),
  phone: schema.string(),
  whatsapp: schema.boolean(),
  inactive: schema.boolean.optional(),
  obs: schema.string.optional(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
