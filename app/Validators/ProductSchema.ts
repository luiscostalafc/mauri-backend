import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProductSchema = schema.create({
  inactive: schema.boolean.optional(),
  group_id: schema.number([
    rules.exists({ table: 'groups', column: 'id' }),
  ]),
  subgroup_id: schema.number([
    rules.exists({ table: 'subgroups', column: 'id' }),
  ]),

  automaker: schema.string(),
  model: schema.string(),
  year_start: schema.number(),
  year_end: schema.number(),
  engine: schema.string(),
  complement: schema.string(),
  quantity_used: schema.number(),
  quantity_package: schema.number(),

  title: schema.string(),
  name: schema.string(),
  type: schema.string(),
  position: schema.string(),
  system: schema.string(),
  color: schema.string(),
  material: schema.string(),
  obs: schema.string(),

  size: schema.number(),
  height: schema.number(),
  width: schema.number(),
  lenth: schema.number(),
  weight: schema.number(),
  inner_diameter: schema.number(),
  external_diameter: schema.number(),
})
