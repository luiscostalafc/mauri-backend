import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const StockOperationSearchSchema = schema.create({
  quantity: schema.number.optional(),
  unit_value: schema.number.optional(),
  comment: schema.string.optional(),
  operation_id: schema.number.optional([
    rules.exists({ table: 'operations', column: 'id' }),
  ]),
  product_id: schema.number.optional([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
})
