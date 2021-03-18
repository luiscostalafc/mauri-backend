import { schema } from '@ioc:Adonis/Core/Validator'

export const PermissionSearchSchema = schema.create({
  permission: schema.string.optional(),
})
