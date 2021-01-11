import { schema } from '@ioc:Adonis/Core/Validator'

export const OperationSearchSchema = schema.create({
  operation: schema.string.optional(),
})
