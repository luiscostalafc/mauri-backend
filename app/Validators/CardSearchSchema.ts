import { schema } from '@ioc:Adonis/Core/Validator'

export const CardSearchSchema = schema.create({
  card_number: schema.string.optional(),
  brand: schema.string.optional(),
  cvv: schema.string.optional(),
  expiration_month: schema.number.optional(),
  expiration_year: schema.number.optional(),
  card_token: schema.string.optional(),
  holder_name: schema.string.optional(),
  holder_cpf: schema.string.optional(),
  holder_birth_date: schema.date.optional(),
})
