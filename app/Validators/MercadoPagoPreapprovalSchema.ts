import { schema } from '@ioc:Adonis/Core/Validator'

export const MercadoPagoPreapprovalCreateSchema = schema.create({
  /** Email do pagador. */
  'payer_email': schema.string.optional(),
  /** Url de retorno. */
  'back_url': schema.string.optional(),
  /** Identificador de fornecedor. */
  'collector_id': schema.string.optional(),
  /** Status de assinatura. */
  'status': schema.string.optional(),
  /** Título da assinatura. */
  'reason': schema.string.optional(),
  /** Valor de referência de assinatura. */
  'external_reference': schema.string.optional(),
  /** Número de dias de recorrência. */
  'auto_recurring.frequency': schema.number(),
  /** Tipo de recorrência (dias ou meses). */
  'auto_recurring.frequency_type': schema.enum(['days', 'months']),
  /** Valor da assinatura. */
  'auto_recurring.transaction_amount': schema.number(),
  /** Identificador de moeda local. */
  'auto_recurring.currency_id': schema.string(),
  /** Data (ISO_8601) de início da assinatura. */
  'auto_recurring.start_date': schema.string.optional(),
  /** Data (ISO_8601) de término da assinatura. */
  'auto_recurring.end_date': schema.string.optional(),
})

export const MercadoPagoPreapprovalUpdateSchema = schema.create({
  /** PreApproval id. */
  'id': schema.string(),

  /** Email do pagador. */
  'payer_email': schema.string.optional(),
  /** Url de retorno. */
  'back_url': schema.string.optional(),
  /** Identificador de fornecedor. */
  'collector_id': schema.string.optional(),
  /** Título da assinatura. */
  'reason': schema.string.optional(),
  /** Valor de referência de assinatura. */
  'external_reference': schema.string.optional(),
  /** Número de dias de recorrência. */
  'auto_recurring.frequency': schema.number(),
  /** Tipo de recorrência (dias ou meses). */
  'auto_recurring.frequency_type': schema.enum(['days', 'months']),
  /** Valor da assinatura. */
  'auto_recurring.transaction_amount': schema.number(),
  /** Identificador de moeda local. */
  'auto_recurring.currency_id': schema.string(),
  /** Data (ISO_8601) de início da assinatura. */
  'auto_recurring.start_date': schema.string.optional(),
  /** Data (ISO_8601) de término da assinatura. */
  'auto_recurring.end_date': schema.string.optional(),

  /** PreApproval status. */
  'status': schema.enum(['pending', 'paused', 'cancelled']),
})

export const MercadoPagoPreapprovalSearchSchema = schema.create({
  id: schema.string(),
})
