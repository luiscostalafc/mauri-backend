import {
  BaseModel, column,
  HasMany,
  hasMany,
  hasOne,
  HasOne,
  manyToMany,
  ManyToMany
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Address from './Address'
import Card from './Card'
import Order from './Order'
import Permission from './Permission'
import Phone from './Phone'
import Stock from './Stock'
import UserGroup from './UserGroup'

export default class MercadoPago extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public name: string
  @column() public username: string
  @column({ serializeAs: null }) public password: string
  @column() public activity: string
  @column() public complete_name: string
  @column() public email: string
  @column() public rg: string
  @column() public cpf_cnpj: string
  @column() public nick: string
  @column() public is_provider: boolean
  @column() public is_admin: boolean
  @column() public inactive: boolean
  @column() public avatar: string
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  // @column()
  // public rememberMeToken?: string

  @manyToMany(() => Address, {
    pivotTable: 'addresses_has_users',
  })
  public address: ManyToMany<typeof Address>

  @manyToMany(() => Card, {
    pivotTable: 'cards_has_users',
  })
  public card: ManyToMany<typeof Card>

  @manyToMany(() => Permission, {
    pivotTable: 'users_has_permissions',
  })
  public permission: ManyToMany<typeof Permission>

  @manyToMany(() => UserGroup, {
    pivotTable: 'groups_has_users',
  })
  public userGroup: ManyToMany<typeof UserGroup>

  @manyToMany(() => Phone, {
    pivotTable: 'users_has_phones',
  })
  public phone: ManyToMany<typeof Phone>

  @hasOne(() => Order)
  public order: HasOne<typeof Order>

  @hasMany(() => Stock)
  public stock: HasMany<typeof Stock>
}
