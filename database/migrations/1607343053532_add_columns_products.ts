import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('fuel').nullable()
      table.string('chassi').nullable()
      table.string('year_fab').nullable()
      table.string('year_model').nullable()
      table.text('quality').nullable()
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
