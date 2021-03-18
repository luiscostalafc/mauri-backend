import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductVariation from 'App/Models/ProductVariation'
import faker from 'faker'
import { randomProductId } from './ProductFactory'

export const ProductVariationFactory = Factory
  .define(ProductVariation, async ({ faker }) => ({
    product_id: await randomProductId(),
    product_variation: faker.name.jobTitle(),
  }))
  .build()

export async function randomProductVariationId () {
  const req = await ProductVariation.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakeProductVariation = async () => ({
  product_id: await randomProductId(),
  product_variation: faker.name.jobTitle(),
})
