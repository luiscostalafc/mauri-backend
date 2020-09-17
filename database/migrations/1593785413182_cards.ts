import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cards extends BaseSchema {
  protected tableName = 'cards'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('card_number').nullable()
      table.string('brand').nullable()
      table.string('cvv').nullable()
      table.integer('expiration_month').nullable()
      table.integer('expiration_year').nullable()
      table.string('card_token').nullable()
      table.string('holder_name').nullable()
      table.string('holder_cpf').nullable()
      table.string('holder_birth_date').nullable()
      table.timestamps(true)
      table.integer('user_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
