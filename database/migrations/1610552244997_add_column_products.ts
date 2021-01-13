import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('branch_type').nullable()// 'Seguimento', 
      table.text('provider_description').nullable()// 'Descrição do Fornecedor', 
      table.string('depth').nullable()// 'Espessura (mm)', 
      table.string('provider_name').nullable()// 'Fornecedor Nome Fantasia', 
      table.string('ncm').nullable()// 'NCM Código Fiscal', 
      table.string('sku').nullable()// 'SKU Código Fornecedor ', 
      table.string('eam').nullable()// 'EAM Código Barras', 
      table.string('oem').nullable()// 'OEM Código Original', 
      table.string('mpn').nullable()// 'MPN Código Marca', 
      table.string('brand').nullable()// 'Marca do Produto', 
      table.string('purchase_packaging').nullable()// 'Embalagem de Compra', 
      table.string('place').nullable()// 'Local do Produto', 
      table.string('unity').nullable()// 'Unidade', 
      table.string('cost_price').nullable()// 'Preço Custo', 
      table.string('sale_price').nullable()// 'Preço Venda', 
      table.string('description').nullable()// 'Descrição Título do Produto 60 Carateres C/Fórmula', 
      table.string('type_mlb').nullable()// 'Tipo MLB', 
      table.string('variations_mlb').nullable()// 'Variações MLB', 
      table.string('assignments_mlb').nullable()// 'Atribuições MLB', 
      table.string('category_id_mlb').nullable()// 'ID da Categorias MLB', 
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('branch_type')
      table.dropColumn('provider_description')
      table.dropColumn('depth')
      table.dropColumn('provider_name')
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
