import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'
import faker from 'faker'
import { randomGroupId } from './GroupFactory'
import { randomSubgroupId } from './SubgroupFactory'

export const ProductFactory = Factory
  .define(Product, async ({ faker }) => ({
    inactive: faker.datatype.boolean(),
    group_id: await randomGroupId(),
    subgroup_id: await randomSubgroupId(),

    automaker: faker.random.arrayElement(['GM', 'Renault', 'Ferrari', 'Dodge']),
    model: faker.name.title(),
    year_start: faker.datatype.number(2035),
    year_end: faker.datatype.number(2035),
    engine: faker.name.lastName(),
    complement: faker.name.lastName(),
    quantity_used: faker.datatype.number(30),
    quantity_package: faker.datatype.number(30),
    price: faker.datatype.number(30),

    size: faker.datatype.number(200),
    height: faker.datatype.number(200),
    width: faker.datatype.number(200),
    lenth: faker.datatype.number(200),
    weight: faker.datatype.number(200),
    inner_diameter: faker.datatype.number(200),
    external_diameter: faker.datatype.number(200),

    title: faker.name.title(),
    name: faker.name.firstName(),
    type: faker.name.jobArea(),
    position: faker.random.arrayElement(['horizontal', 'vertical']),
    system: faker.lorem.word(),
    color: faker.commerce.color(),
    material: faker.lorem.word(),
    obs: faker.lorem.words(5),

    fuel: faker.random.arrayElement(['gasolina', 'alcool']),
    chassi: faker.datatype.number(200).toString(),
    year_fab: faker.date.past(10).getFullYear().toString(),
    year_model: faker.date.past(10).getFullYear().toString(),
    quality: faker.random.arrayElement(['original', 'similar']),
  }))
  .build()

export async function randomProductId () {
  const req = await Product.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakeProduct = async () => ({
  inactive: faker.datatype.boolean(),
    group_id: await randomGroupId(),
    subgroup_id: await randomSubgroupId(),

    automaker: faker.random.arrayElement(['GM', 'Renault', 'Ferrari', 'Dodge']),
    model: faker.name.title(),
    year_start: faker.datatype.number(2035),
    year_end: faker.datatype.number(2035),
    engine: faker.name.lastName(),
    complement: faker.name.lastName(),
    quantity_used: faker.datatype.number(30),
    quantity_package: faker.datatype.number(30),
    price: faker.datatype.number(30),

    size: faker.datatype.number(200),
    height: faker.datatype.number(200),
    width: faker.datatype.number(200),
    lenth: faker.datatype.number(200),
    weight: faker.datatype.number(200),
    inner_diameter: faker.datatype.number(200),
    external_diameter: faker.datatype.number(200),

    title: faker.name.title(),
    name: faker.name.firstName(),
    type: faker.name.jobArea(),
    position: faker.random.arrayElement(['horizontal', 'vertical']),
    system: faker.lorem.word(),
    color: faker.commerce.color(),
    material: faker.lorem.word(),
    obs: faker.lorem.words(5),

    fuel: faker.random.arrayElement(['gasolina', 'alcool']),
    chassi: faker.datatype.number(200).toString(),
    year_fab: faker.date.past(10).getFullYear().toString(),
    year_model: faker.date.past(10).getFullYear().toString(),
    quality: faker.random.arrayElement(['original', 'similar']),
})
