import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const AssetSearchSchema = schema.create({
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  group_id: schema.number.optional([
    rules.exists({ table: 'groups', column: 'id' }),
  ]),
  product_id: schema.number.optional([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
})

