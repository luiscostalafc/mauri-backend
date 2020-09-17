import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Group from './Group'
import Product from './Product'

export default class Asset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public asset: string

  @column()
  public mime: string

  @column()
  public path: string

  @column()
  public user_id: number

  @column()
  public group_id: number

  @column()
  public product_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Group)
  public group: HasOne<typeof Group>

  @hasOne(() => Product)
  public product: HasOne<typeof Product>
}
