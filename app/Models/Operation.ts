import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Product from './Product'
import StockOperation from './StockOperation'

export default class Operation extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public operation: string

  @hasMany(() => StockOperation)
  public stockOperation: HasMany<typeof StockOperation>

  @manyToMany(() => Product, {
    pivotTable: 'stock_operations',
  })
  public product: ManyToMany<typeof Product>
}
