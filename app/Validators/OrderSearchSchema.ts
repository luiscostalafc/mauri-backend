import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const OrderSearchSchema = schema.create({
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  provider_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  order_status_id: schema.number.optional([
    rules.exists({ table: 'order_statuses', column: 'id' }),
  ]),
  delivery_id: schema.number.optional([
    rules.exists({ table: 'deliveries', column: 'id' }),
  ]),
})
