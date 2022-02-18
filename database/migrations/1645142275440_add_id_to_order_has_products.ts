import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddIdToOrderHasProducts extends BaseSchema {
  protected tableName = 'order_has_products'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.increments('id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, table => {
      table.dropColumn('id')
    })
  }
}
