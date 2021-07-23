import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Product from './Product'
import StockType from './StockType'

export default class Stock extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public quantity: number
  @column({columnName: 'stock_type_id'}) public stockTypeId: number
  @column({columnName: 'product_id'}) public productId: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @belongsTo(() => StockType)
  public stock: BelongsTo<typeof StockType>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}
