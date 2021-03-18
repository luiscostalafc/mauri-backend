import Factory from '@ioc:Adonis/Lucid/Factory'
import Permission from 'App/Models/Permission'
import faker from 'faker'

export const PermissionFactory = Factory
  .define(Permission, ({ faker }) => {
    return ({
      permission: faker.lorem.words(2),
    })
  })
  .build()

export async function randomPermissionId () {
  const req = await Permission.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakePermission = () => ({
  permission: faker.lorem.words(2),
})
