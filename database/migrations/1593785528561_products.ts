import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('inactive').notNullable().defaultTo(false)
      // product aplications
      table.string('automaker').nullable()
      table.text('model').nullable()
      table.integer('year_start').nullable()
      table.integer('year_end').nullable()
      table.string('engine').nullable()
      table.string('complement').nullable()
      table.integer('quantity_used').notNullable().defaultTo(1)
      table.integer('quantity_package').notNullable().defaultTo(1)
      // product dimensions
      table.string('size').nullable()
      table.string('height').nullable()
      table.string('width').nullable()
      table.string('lenth').nullable()
      table.string('weight').nullable()
      table.string('inner_diameter').nullable()
      table.string('external_diameter').nullable()
      // product descriptions
      table.text('title').nullable()
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
