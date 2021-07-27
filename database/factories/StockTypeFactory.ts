import Factory from '@ioc:Adonis/Lucid/Factory'
import StockType from 'App/Models/StockType'
import faker from 'faker'

export const StockTypeFactory = Factory
  .define(StockType, async ({ faker }) => ({
    stock_type: faker.name.findName(),
  }))
  .build()

export async function randomStockTypeId () {
  const req = await StockType.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakeStockType = async () => ({
  stock_type: faker.name.findName(),
})
