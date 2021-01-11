import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Order from './Order'

export default class Delivery extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public delivery: string
  @column() public inactive: boolean
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @hasMany(() => Order)
  public order: HasMany<typeof Order>
}
