import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cep').nullable()
      table.string('zone').nullable()
      table.string('state').nullable()
      table.string('city').nullable()
      table.string('country').nullable()
      table.string('district').nullable()
      table.string('street').nullable()
      table.string('number').nullable()
      table.string('complement').nullable()
      table.string('delivery').nullable()
      table.boolean('inactive').nullable().defaultTo(false)
      table.timestamps(true)
      table.integer('user_id').unsigned()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
