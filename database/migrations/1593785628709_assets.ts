import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Assets extends BaseSchema {
  protected tableName = 'assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('asset').notNullable()
      table.string('mime').notNullable()
      table.string('path').notNullable()
      table.timestamps(true)
      table.integer('user_id').unsigned().nullable()
      table.integer('group_id').unsigned().nullable()
      table.integer('product_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('group_id').references('id').inTable('groups').onDelete('CASCADE')
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
