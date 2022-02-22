/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Database from '@ioc:Adonis/Lucid/Database'
class OrderHasProductsRepository {

  async getOrdersWithProducts(): Promise<any>{
      const user = await Database
      .rawQuery('select * from users where id = ?', [1])
      const data = await Database.rawQuery('select * from ')
  }

}

export default new OrderHasProductsRepository()
