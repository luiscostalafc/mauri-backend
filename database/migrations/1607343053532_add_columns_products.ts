import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('fuel')
      table.string('chassi')
      table.string('year_fab')
      table.string('year_model')
      table.string('quality')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('fuel')
      table.dropColumn('chassi')
      table.dropColumn('year_fab')
      table.dropColumn('year_model')
      table.dropColumn('quality')
    })
  }
}
