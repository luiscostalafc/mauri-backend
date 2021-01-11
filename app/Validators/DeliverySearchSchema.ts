import { schema } from '@ioc:Adonis/Core/Validator'

export const DeliverySearchSchema = schema.create({
  delivery: schema.string.optional(),
})

