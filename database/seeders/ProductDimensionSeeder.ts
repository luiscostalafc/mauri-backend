import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductDimensionFactory } from 'Database/factories'

export default class ProductDimensionSeeder extends BaseSeeder {
  public async run () {
    await ProductDimensionFactory.createMany(10)
  }
}
