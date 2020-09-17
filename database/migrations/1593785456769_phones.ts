import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Phones extends BaseSchema {
  protected tableName = 'phones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('type').notNullable().defaultTo('celular')
      table.string('area_code').notNullable()
      table.string('phone').notNullable()
      table.boolean('whatsapp').notNullable().defaultTo(true)
      table.boolean('inactive').notNullable().defaultTo(true)
      table.text('obs').nullable()
      table.timestamps(true)
      table.integer('user_id').unsigned().notNullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
