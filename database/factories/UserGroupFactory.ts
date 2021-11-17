import Factory from '@ioc:Adonis/Lucid/Factory'
import UserGroup from 'App/Models/UserGroup'
import faker from 'faker'

export const UserGroupFactory = Factory
  .define(UserGroup, ({ faker }) => {
    return ({
      group: faker.name.jobTitle(),
      is_visible: faker.datatype.boolean(),
    })
  })
  .build()

export async function randomUserGroupId () {
  const req = await UserGroup.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}

export const fakeUserGroup = () => ({
  group: faker.name.jobTitle(),
  is_visible: faker.datatype.boolean(),
})
