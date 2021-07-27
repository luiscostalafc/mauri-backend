import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stock extends BaseSchema {
  protected tableName = 'stocks'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('min_alert')
      table.string('quality')
      table.integer('user_id').unsigned()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('min_alert')
      table.dropColumn('quality')
      table.dropColumn('user_id')
    })
  }
}
