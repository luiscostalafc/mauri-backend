import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Mercadopagos extends BaseSchema {
  protected tableName = 'mercadopago_transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('method')
      table.json('user').nullable()
      table.json('request').nullable()
      table.json('response').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
