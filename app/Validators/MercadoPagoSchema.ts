import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const MercadoPagoSchema = schema.create({
  'transaction_amount': schema.number(),
  'token': schema.string(),
  'description': schema.string.optional(),
  'installments': schema.number(),
  'payment_method_id': schema.string(),
  'issuer_id': schema.string(),
  'payer.email': schema.string({}, [rules.email()]),
  'payer.identification.type': schema.string(),
  'payer.identification.number': schema.number(),
})
