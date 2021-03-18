import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Product from './Product'
import Subgroup from './Subgroup'

export default class Group extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public group: string
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @manyToMany(() => Subgroup, {
    pivotTable: 'products',
  })
  public subgroup: ManyToMany<typeof Subgroup>
}
