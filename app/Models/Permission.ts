import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Permission extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public permission: string
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @manyToMany(() => User, {
    pivotTable: 'groups_has_users',
  })
  public user: ManyToMany<typeof User>
}
