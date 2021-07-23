import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { StockTypeFactory } from 'Database/factories/StockTypeFactory'

export default class StockTypeSeeder extends BaseSeeder {
  public async run () {
    await StockTypeFactory.createMany(10)
  }
}
