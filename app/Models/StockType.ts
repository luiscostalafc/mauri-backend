import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Stock from './Stock'

export default class StockType extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public stock_type: string
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @hasMany(() => Stock)
  public stock: HasMany<typeof Stock>
}
