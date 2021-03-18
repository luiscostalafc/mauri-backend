import { schema } from '@ioc:Adonis/Core/Validator'

export const OrderStatusSearchSchema = schema.create({
  order_status: schema.string.optional(),
})
