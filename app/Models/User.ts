import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column, HasMany, hasMany, hasOne, HasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import uploadConfig from '../../config/upload'
import Address from './Address'
import Card from './Card'
import Order from './Order'
import Permission from './Permission'
import Phone from './Phone'
import Stock from './Stock'
import UserGroup from './UserGroup'

export default class User extends BaseModel {
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

  public getAvatar_url (): string | null | undefined {
    if (!this.avatar) {
      return null
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.avatar}`
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`
      default:
        return null
    }
  }

  // @column()
  // public rememberMeToken?: string

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

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
