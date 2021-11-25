import {
  BaseModel,
  column
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class MercadoPago extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public method: string
  @column() public user: User
  @column() public request: object
  @column() public response: object
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
}
