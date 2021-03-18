import { BaseModel, column, computed, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Delivery from './Delivery'
import OrderStatus from './OrderStatus'
import User from './User'

export default class Order extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column({columnName: 'user_id'}) public userId: number
  @column({columnName: 'provider_id'}) public providerId: number
  @column({columnName: 'order_status_id'}) public orderStatusId: number
  @column({columnName: 'delivery_id'}) public deliveryId: number

  @computed()
  public get extras () {
    return this.$extras
  }

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => User)
  public provider: HasOne<typeof User>

  @hasOne(() => OrderStatus)
  public orderStatus: HasOne<typeof OrderStatus>

  @hasOne(() => Delivery)
  public delivery: HasOne<typeof Delivery>
}
