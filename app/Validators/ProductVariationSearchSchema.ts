import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ProductVariationSearchSchema = schema.create({
  product_id: schema.number.optional([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
  product_variation: schema.string.optional(),
})
