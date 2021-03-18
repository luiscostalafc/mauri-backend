import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const UserSearchSchema = schema.create({
  name: schema.string.optional(),
  username: schema.string.optional(),
  password: schema.string.optional(),
  activity: schema.string.optional(),
  complete_name: schema.string.optional(),
  email: schema.string.optional({}, [
    rules.email(),
  ]),
  rg: schema.string.optional(),
  cpf_cnpj: schema.string.optional(),
  nick: schema.string.optional(),
  is_provider: schema.boolean.optional(),
  inactive: schema.boolean.optional(),
})
