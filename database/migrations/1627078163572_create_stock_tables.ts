import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateStockTables extends BaseSchema {
  protected tableName = 'stocks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().notNullable()
      table.integer('stock_type_id').unsigned()
      table.integer('quantity')
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
      table.foreign('stock_type_id').references('id').inTable('stock_types').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

