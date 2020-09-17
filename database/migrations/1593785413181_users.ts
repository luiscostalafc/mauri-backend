import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').nullable()
      table.string('username').nullable()
      table.string('password').nullable()
      table.string('activity').nullable()
      table.string('complete_name').nullable()
      table.string('email').unique().nullable()
      table.string('rg').nullable()
      table.string('cpf_cnpj').nullable()
      table.string('nick').nullable()
      table.boolean('is_provider').notNullable().defaultTo(false)
      table.boolean('inactive').notNullable().defaultTo(false)
      // table.string('remember_me_token').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
