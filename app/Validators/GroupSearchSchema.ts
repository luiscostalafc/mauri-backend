import { schema } from '@ioc:Adonis/Core/Validator'

export const GroupSearchSchema = schema.create({
  group: schema.string.optional(),
})

