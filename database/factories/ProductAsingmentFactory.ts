import Factory from '@ioc:Adonis/Lucid/Factory'
import ProductAsingment from 'App/Models/ProductAsingment'
import faker from 'faker'
import { randomProductId } from './ProductFactory'

export const ProductAsingmentFactory = Factory
  .define(ProductAsingment, async ({ faker }) => ({
    product_asingment: faker.lorem.words(5),
    product_id: await randomProductId(),
  }))
  .build()

export async function randomProductAsingmentId () {
  const req = await ProductAsingment.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakeProductAsingment = async () => ({
  product_asingment: faker.lorem.words(5),
  product_id: await randomProductId(),
})
