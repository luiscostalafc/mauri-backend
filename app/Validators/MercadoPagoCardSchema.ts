import { schema } from '@ioc:Adonis/Core/Validator'

export const MercadoPagoCardCreateSchema = schema.create({
  /** Customer's id */
  customer_id: schema.string(),
  /** Card token */
  token: schema.string(),
})

export const MercadoPagoCardUpdateSchema = schema.create({
  id: schema.string(),
  /** Customer's id */
  customer_id: schema.string(),
  /** Card token */
  token: schema.string(),
})

export const MercadoPagoCardSearchSchema = schema.create({
  customer_id: schema.string(),
  id: schema.string(),
})
