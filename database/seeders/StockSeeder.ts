import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { StockFactory } from 'Database/factories/StockFactory'

export default class StockSeeder extends BaseSeeder {
  public async run () {
    await StockFactory.createMany(10)
  }
}
