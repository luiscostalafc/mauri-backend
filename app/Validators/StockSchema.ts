import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const StockSchema = schema.create({
  quantity: schema.number(),
  stock_type_id: schema.number.optional([
    rules.exists({ table: 'stock_types', column: 'id' }),
  ]),
  product_id: schema.number([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
})
