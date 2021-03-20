import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const AddressSchema = schema.create({
  cep: schema.string.optional(),
  zone: schema.string.optional(),
  state: schema.string.optional(),
  city: schema.string.optional(),
  country: schema.string.optional(),
  district: schema.string.optional(),
  street: schema.string.optional(),
  number: schema.string.optional(),
  complement: schema.string.optional(),
  delivery: schema.boolean.optional(),
  inactive: schema.boolean.optional(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
