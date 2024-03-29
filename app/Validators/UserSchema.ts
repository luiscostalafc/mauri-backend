import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const UserSchema = schema.create({
  name: schema.string(),
  username: schema.string.optional(),
  password: schema.string.optional(),
  activity: schema.string(),
  complete_name: schema.string.optional(),
  email: schema.string({}, [
    rules.email(),
    rules.unique({ table: 'users', column: 'email' }),
  ]),
  rg: schema.string(),
  cpf_cnpj: schema.string(),
  nick: schema.string.optional(),
  is_provider: schema.boolean.optional(),
  inactive: schema.boolean.optional(),
})
