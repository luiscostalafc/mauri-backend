import { schema } from '@ioc:Adonis/Core/Validator'

export const StockTypeSchema = schema.create({
  stock_type: schema.string.optional(),
})
