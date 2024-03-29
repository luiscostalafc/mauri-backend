import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Operation from './Operation'
import Product from './Product'

export default class StockOperation extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public quantity: number
  @column() public unit_value: number
  @column() public comment: string
  @column({columnName: 'operation_id'}) public operationId: number
  @column({columnName: 'product_id'}) public productId: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @belongsTo(() => Operation)
  public operation: BelongsTo<typeof Operation>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}
