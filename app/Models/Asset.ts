import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Group from './Group'
import Product from './Product'
import User from './User'

export default class Asset extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public asset: string
  @column() public mime: string
  @column() public path: string
  @column({columnName: 'user_id'}) public userId: number
  @column({columnName: 'group_id'}) public groupId: number
  @column({columnName: 'product_id'}) public productId: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Group)
  public group: HasOne<typeof Group>

  @hasOne(() => Product)
  public product: HasOne<typeof Product>
}
