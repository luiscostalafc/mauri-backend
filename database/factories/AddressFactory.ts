import Factory from '@ioc:Adonis/Lucid/Factory'
import Address from 'App/Models/Address'
import { randomUserId } from './UserFactory'

export const AddressFactory = Factory
  .define(Address, async ({ faker }) => ({
    user_id: await randomUserId(),
    cep: faker.address.zipCode(),
    zone: faker.address.cityPrefix(),
    state: faker.address.state(),
    city: faker.address.city(),
    country: faker.address.zipCode(),
    district: faker.address.citySuffix(),
    street: faker.address.streetName(),
    number: String(faker.random.number(1000)),
    complement: faker.random.arrayElement(['casa','apartarmento','']),
    delivery: faker.random.boolean(),
    inactive: faker.random.boolean(),
  }))
  .build()

export async function randomAddressId () {
  const req = await Address.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
