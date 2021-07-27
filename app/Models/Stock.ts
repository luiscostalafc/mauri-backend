import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Product from './Product'
import StockType from './StockType'
import User from './User'

export default class Stock extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public quantity: number
  @column({columnName: 'min_alert'}) public minAlert: number
  @column() public quality: String
  @column({columnName: 'stock_type_id'}) public stockTypeId: number
  @column({columnName: 'product_id'}) public productId: number
  @column({columnName: 'user_id'}) public userId: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @belongsTo(() => StockType)
  public stockType: BelongsTo<typeof StockType>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}
