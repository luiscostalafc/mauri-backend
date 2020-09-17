import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const AddressSchema = schema.create({
  // cep: schema.string(), // all nullable in DB
  // zone: schema.string(), // all nullable in DB
  // state: schema.string(), // all nullable in DB
  // city: schema.string(), // all nullable in DB
  // country: schema.string(), // all nullable in DB
  // district: schema.string(), // all nullable in DB
  // street: schema.string(), // all nullable in DB
  // number: schema.string(), // all nullable in DB
  // complement: schema.string(), // all nullable in DB
  // delivery: schema.boolean(), // all nullable in DB
  // inactive: schema.boolean(), // all nullable in DB
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
