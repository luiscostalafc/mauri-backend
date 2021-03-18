import { schema } from '@ioc:Adonis/Core/Validator'

export const SubgroupSearchSchema = schema.create({
  subgroup: schema.string.optional(),
})
