import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const OrderDetailSearchSchema = schema.create({
  reference: schema.string.optional(),
  payment_method: schema.string.optional(),
  order_status: schema.string.optional(),
  extra_amount: schema.string.optional(),
  intallment_quantity: schema.number.optional(),
  intallment_value: schema.number.optional(),
  order_id: schema.number.optional([
    rules.exists({ table: 'orders', column: 'id' }),
  ]),
})
