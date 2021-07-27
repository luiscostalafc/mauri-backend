import Factory from '@ioc:Adonis/Lucid/Factory'
import Stock from 'App/Models/Stock'
import faker from 'faker'
import { randomProductId } from './ProductFactory'
import { randomStockTypeId } from './StockTypeFactory'
import { randomUserId } from './UserFactory'

export const StockFactory = Factory
  .define(Stock, async ({ faker }) => ({
    quantity: faker.random.number(50),
    minAlert: faker.random.number(50),
    quality: faker.name.findName(),
    stock_type_id: await randomStockTypeId(),
    product_id: await randomProductId(),
    user_id: await randomUserId(),
  }))
  .build()

export async function randomStockId () {
  const req = await Stock.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakeStock = async () => ({
  quantity: faker.random.number(50),
  minAlert: faker.random.number(50),
  quality: faker.name.findName(),
  stock_type_id: await randomStockTypeId(),
  product_id: await randomProductId(),
  user_id: await randomUserId(),
})
