import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class User extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('avatar')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('users')
    })
  }
}
