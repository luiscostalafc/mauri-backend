import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Product from './Product'

export default class ProductVariation extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column({columnName: 'product_id'}) public productId: number
  @column() public product_variation: string
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @hasOne(() => Product)
  public product: HasOne<typeof Product>
}
