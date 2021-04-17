import { schema } from '@ioc:Adonis/Core/Validator'

export const ProductDistinctSchema = schema.create({
  name: schema.string(),
})
