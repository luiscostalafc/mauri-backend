import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'

export default class OrderHasProduct extends BaseModel {
  @column() public quantity: number
  @column() public amount: number
  @column() public order_id: number
  @column() public product_id: number

  @hasOne(() => Order)
  public order: HasOne<typeof Order>
}
