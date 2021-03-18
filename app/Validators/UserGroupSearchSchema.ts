import { schema } from '@ioc:Adonis/Core/Validator'

export const UserGroupSearchSchema = schema.create({
  group: schema.string.optional(),
  is_visible: schema.boolean.optional(),
})
