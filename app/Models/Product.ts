import { BaseModel, column, hasMany, HasMany, hasOne, HasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Asset from './Asset'
import Group from './Group'
import ProductAsingment from './ProductAsingment'
import ProductVariation from './ProductVariation'
import StockOperation from './StockOperation'
import Subgroup from './Subgroup'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public inactive: boolean

  @column()
  public group_id: number

  @column()
  public subgroup_id: number

  // application
  @column()
  public automaker: string

  @column()
  public model: string

  @column()
  public year_start: number

  @column()
  public year_end: number

  @column()
  public engine: string

  @column()
  public complement: string

  @column()
  public quantity_used: number

  @column()
  public quantity_package: number
  // dimension
  @column()
  public size: number

  @column()
  public height: number

  @column()
  public width: number

  @column()
  public lenth: number

  @column()
  public weight: number

  @column()
  public inner_diameter: number

  @column()
  public external_diameter: number
  // description
  @column()
  public title: string

  @column()
  public name: string

  @column()
  public type: string

  @column()
  public position: string

  @column()
  public system: string

  @column()
  public color: string

  @column()
  public material: string

  @column()
  public obs: string

  @column()
  public fuel: string

  @column()
  public chassi: string

  @column()
  public year_fab: string

  @column()
  public year_model: string

  @column()
  public quality: string
  @column()
  public price: string

  @hasOne(() => Group)
  public group: HasOne<typeof Group>

  @hasOne(() => Subgroup)
  public subgroup: HasOne<typeof Subgroup>

  @hasOne(() => ProductAsingment)
  public productAsingment: HasOne<typeof ProductAsingment>

  @hasOne(() => ProductVariation)
  public productVariations: HasOne<typeof ProductVariation>

  @hasMany(() => StockOperation)
  public stockOperation: HasMany<typeof StockOperation>

  @manyToMany(() => Asset, {
    pivotTable: 'assets',
  })
  public asset: ManyToMany<typeof Asset>
}
