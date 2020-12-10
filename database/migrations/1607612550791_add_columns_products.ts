import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('size','measure')
      table.renameColumn('type','branch_type')
      table.string('provider_description').nullable()
      table.string('depth').nullable()
      table.string('ncm').nullable()
      table.string('sku').nullable()
      table.string('eam').nullable()
      table.string('oem').nullable()
      table.string('mpn').nullable()
      table.string('brand').nullable()
      table.string('purchase_packaging').nullable()
      table.string('place').nullable()
      table.string('unity').nullable()
      table.string('cost_price').nullable()
      table.string('sale_price').nullable()
      table.string('description').nullable()
      table.string('type_mlb').nullable()
      table.string('variations_mlb').nullable()
      table.string('assignments_mlb').nullable()
      table.string('category_id_mlb').nullable()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('measure','size')
      table.renameColumn('branch_type','type')
      table.dropColumn('provider_description')
      table.dropColumn('depth')
      table.dropColumn('ncm')
      table.dropColumn('sku')
      table.dropColumn('eam')
      table.dropColumn('oem')
      table.dropColumn('mpn')
      table.dropColumn('brand')
      table.dropColumn('purchase_packaging')
      table.dropColumn('place')
      table.dropColumn('unity')
      table.dropColumn('cost_price')
      table.dropColumn('sale_price')
      table.dropColumn('description')
      table.dropColumn('type_mlb')
      table.dropColumn('variations_mlb')
      table.dropColumn('assignments_mlb')
      table.dropColumn('category_id_mlb')
    })
  }
}

