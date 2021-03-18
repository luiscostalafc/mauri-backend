import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const OrderSchema = schema.create({
  userId: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  providerId: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  orderStatusId: schema.number([
    rules.exists({ table: 'order_statuses', column: 'id' }),
  ]),
  deliveryId: schema.number([
    rules.exists({ table: 'deliveries', column: 'id' }),
  ]),
})
