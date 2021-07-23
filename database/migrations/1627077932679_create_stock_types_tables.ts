import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateStockTypesTables extends BaseSchema {
  protected tableName = 'stock_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('stock_type')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
