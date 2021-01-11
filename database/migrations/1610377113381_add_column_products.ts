import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.float('price')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('price')
    })
  }
}
