import Factory from '@ioc:Adonis/Lucid/Factory'
import Phone from 'App/Models/Phone'
import faker from 'faker'
import { randomUserId } from './UserFactory'

export const PhoneFactory = Factory
  .define(Phone, async ({ faker }) => ({
    user_id: await randomUserId(),
    type: faker.random.arrayElement(['celular', 'fixo', 'comercial', 'contato']),
    phone: faker.phone.phoneNumber(),
    whatsapp: faker.datatype.boolean(),
    inactive: faker.datatype.boolean(),
    obs: faker.lorem.words(5),
  }))
  .build()

export async function randomPhoneId () {
  const req = await Phone.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakePhone = async () => ({
  user_id: await randomUserId(),
  type: faker.random.arrayElement(['celular', 'fixo', 'comercial', 'contato']),
  phone: faker.phone.phoneNumber(),
  whatsapp: faker.datatype.boolean(),
  inactive: faker.datatype.boolean(),
  obs: faker.lorem.words(5),
})
