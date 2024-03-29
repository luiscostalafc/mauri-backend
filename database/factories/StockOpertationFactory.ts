import Factory from '@ioc:Adonis/Lucid/Factory'
import StockOperation from 'App/Models/StockOperation'
import faker from 'faker'
import { randomOperationId } from './OperationFactory'
import { randomProductId } from './ProductFactory'

export const StockOperationFactory = Factory
  .define(StockOperation, async ({ faker }) => ({
    quantity: faker.datatype.number(50),
    unit_value: faker.datatype.number(50),
    comment: faker.lorem.words(5),
    operation_id: await randomOperationId(),
    product_id: await randomProductId(),
  }))
  .build()

export async function randomStockOperationId () {
  const req = await StockOperation.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakeStockOperation = async () => ({
  quantity: faker.datatype.number(50),
  // unit_value: faker.datatype.number(50),
  comment: faker.lorem.words(5),
  operation_id: await randomOperationId(),
  product_id: await randomProductId(),
})
