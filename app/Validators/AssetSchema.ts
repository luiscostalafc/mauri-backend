import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const AssetSchema = schema.create({
  file: schema.file({
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  }),
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

