import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const MercadoPagoCustomerCreateSchema = schema.create({
  /** Email do cliente */
  'email': schema.string({}, [rules.email()]),
  /** Nome do cliente. */
  'first_name': schema.string.optional(),
  /** Sobrenome do cliente. */
  'last_name': schema.string.optional(),
  /** Telefone do cliente. */
  'phone.area_code': schema.string(),
  'phone.number': schema.string(),
  'phone.extension': schema.string.optional(),
  /** Informações sobre a identificação do cliente. */
  'identification.type': schema.string(),
  'identification.number': schema.string(),
  /** Endereço por defeito do cliente. */
  'default_address': schema.string.optional(),
  /** Informação sobre o endereço padrão do cliente. */
  'address.zip_code': schema.string.optional(),
  'address.street_name': schema.string.optional(),
  'address.street_number': schema.string.optional(),
  /** Data (ISO_8601) de registo do cliente. */
  'date_registered': schema.string.optional(),
  /** Descrição do cliente. */
  'description': schema.string.optional(),
  /** Cartão padrão do cliente. */
  'default_card': schema.string.optional(),
})

export const MercadoPagoCustomerUpdateSchema = schema.create({
  'id': schema.string(),
  /** Email do cliente */
  'email': schema.string({}, [rules.email()]),
  /** Nome do cliente. */
  'first_name': schema.string.optional(),
  /** Sobrenome do cliente. */
  'last_name': schema.string.optional(),
  /** Telefone do cliente. */
  'phone.area_code': schema.string(),
  'phone.number': schema.string(),
  'phone.extension': schema.string.optional(),
  /** Informações sobre a identificação do cliente. */
  'identification.type': schema.string(),
  'identification.number': schema.string(),
  /** Endereço por defeito do cliente. */
  'default_address': schema.string.optional(),
  /** Informação sobre o endereço padrão do cliente. */
  'address.zip_code': schema.string.optional(),
  'address.street_name': schema.string.optional(),
  'address.street_number': schema.string.optional(),
  /** Data (ISO_8601) de registo do cliente. */
  'date_registered': schema.string.optional(),
  /** Descrição do cliente. */
  'description': schema.string.optional(),
  /** Cartão padrão do cliente. */
  'default_card': schema.string.optional(),
})

export const MercadoPagoCustomerSearchSchema = schema.create({
  'id': schema.string(),
})
