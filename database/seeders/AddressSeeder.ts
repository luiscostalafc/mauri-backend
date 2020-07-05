import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { AddressFactory } from 'Database/factories'

export default class AddressSeeder extends BaseSeeder {
  public async run () {
    AddressFactory.createMany(10)
  }
}
