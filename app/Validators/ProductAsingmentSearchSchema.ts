import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ProductAsingmentSearchSchema = schema.create({
  product_asingment: schema.string.optional(),
  product_id: schema.number.optional([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
})
