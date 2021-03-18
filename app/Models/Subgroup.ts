import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Group from './Group'
import Product from './Product'

export default class Subgroup extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public subgroup: string
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @manyToMany(() => Group, {
    pivotTable: 'products',
  })
  public group: ManyToMany<typeof Group>
}
