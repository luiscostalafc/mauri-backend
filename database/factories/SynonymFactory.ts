import Factory from '@ioc:Adonis/Lucid/Factory'
import Synonym from 'App/Models/Synonym'
import faker from 'faker'
import { randomProductId } from './ProductFactory'

export const SynonymFactory = Factory
  .define(Synonym, async ({ faker }) => ({
    synonym: faker.lorem.word(),
    product_id: await randomProductId(),
  }))
  .build()

export async function randomSynonymId () {
  const req = await Synonym.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakeSynonym = async () => ({
  synonym: faker.lorem.word(),
  product_id: await randomProductId(),
})
