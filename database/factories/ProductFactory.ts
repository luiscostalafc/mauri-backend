import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'
import { randomGroupId } from './GroupFactory'
import { randomSubgroupId } from './SubgroupFactory'

export const ProductFactory = Factory
  .define(Product, async ({ faker }) => ({
    inactive: faker.random.boolean(),
    group_id: await randomGroupId(),
    subgroup_id: await randomSubgroupId(),

    automaker: faker.random.arrayElement(['GM', 'Renault', 'Ferrari', 'Dodge']),
    model: faker.name.title(),
    year_start: faker.random.number(2035),
    year_end: faker.random.number(2035),
    engine: faker.name.lastName(),
    complement: faker.name.lastName(),
    quantity_used: faker.random.number(30),
    quantity_package: faker.random.number(30),

    size: faker.random.number(200),
    height: faker.random.number(200),
    width: faker.random.number(200),
    lenth: faker.random.number(200),
    weight: faker.random.number(200),
    inner_diameter: faker.random.number(200),
    external_diameter: faker.random.number(200),

    title: faker.name.title(),
    name: faker.name.firstName(),
    type: faker.name.jobArea(),
    position: faker.random.arrayElement(['horizontal', 'vertical']),
    system: faker.lorem.word(),
    color: faker.commerce.color(),
    material: faker.lorem.word(),
    obs: faker.lorem.words(5),

    fuel: faker.random.arrayElement(['gasolina', 'alcool']),
    chassi: faker.random.number(200).toString(),
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
