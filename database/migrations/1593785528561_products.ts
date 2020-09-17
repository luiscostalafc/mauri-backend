import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('inactive').notNullable().defaultTo(false)
      // product aplications
      table.string('automaker').nullable()
      table.string('model').nullable()
      table.integer('year_start').notNullable().defaultTo(2000)
      table.integer('year_end').nullable()
      table.string('engine').nullable()
      table.string('complement').nullable()
      table.integer('quantity_used').notNullable().defaultTo(1)
      table.integer('quantity_package').notNullable().defaultTo(1)
      // product dimensions
      table.float('size').nullable()
      table.float('height').nullable()
      table.float('width').nullable()
      table.float('lenth').nullable()
      table.float('weight').nullable()
      table.float('inner_diameter').nullable()
      table.float('external_diameter').nullable()
      // product descriptions
      table.string('title').nullable()
      table.string('name').nullable()
      table.string('type').nullable()
      table.string('position').nullable()
      table.string('system').nullable()
      table.string('color').nullable()
      table.string('material').nullable()
      table.text('obs')

      table.integer('group_id').unsigned().notNullable()
      table.integer('subgroup_id').unsigned().notNullable()

      table.foreign('group_id').references('id').inTable('groups').onDelete('CASCADE')
      table.foreign('subgroup_id').references('id').inTable('subgroups').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
