import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const SynonymSearchSchema = schema.create({
  synonym: schema.string.optional(),
  product_id: schema.number.optional([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
})
