import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ProductSearchSchema = schema.create({
  inactive: schema.boolean.optional(),
  group_id: schema.number.optional([
    rules.exists({ table: 'groups', column: 'id' }),
  ]),
  subgroup_id: schema.number.optional([
    rules.exists({ table: 'subgroups', column: 'id' }),
  ]),

  automaker: schema.string.optional(),
  model: schema.string.optional(),
  year_start: schema.number.optional(),
  year_end: schema.number.optional(),
  engine: schema.string.optional(),
  complement: schema.string.optional(),
  quantity_used: schema.number.optional(),
  quantity_package: schema.number.optional(),

  title: schema.string.optional(),
  name: schema.string.optional(),
  type: schema.string.optional(),
  position: schema.string.optional(),
  system: schema.string.optional(),
  color: schema.string.optional(),
  material: schema.string.optional(),
  obs: schema.string.optional(),

  size: schema.number.optional(),
  height: schema.number.optional(),
  width: schema.number.optional(),
  lenth: schema.number.optional(),
  weight: schema.number.optional(),
  inner_diameter: schema.number.optional(),
  external_diameter: schema.number.optional(),

  fuel: schema.string.optional(),
  chassi: schema.string.optional(),
  year_fab: schema.string.optional(),
  year_model: schema.string.optional(),
  quality: schema.string.optional(),
})
