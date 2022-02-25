/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Logger from '@ioc:Adonis/Core/Logger'
import OrderDetail from 'App/Models/OrderDetail'
import { mountResponse } from 'App/Services/ResponseUtils'
import Database from '@ioc:Adonis/Lucid/Database'
import {
  all,
  create,
  createOrUpdate,
  find,
  findAndDelete,
  findAndUpdate,
  first,
} from '../Services/CRUD'

class OrderDatailsRepository {
  protected model: any
  protected obj = []
  protected contentError = []
  protected returnMsg = ''
  protected statusCode = 400
  protected options = 0

  public logError(func, error) {
    Logger.warn(`Repository ${func} Error: ${error}`)
  }

  constructor() {
    this.model = OrderDetail
  }

  async first() {
    return await first(this.model)
  }

  async all() {
    return await all(this.model)
  }

  async find(id) {
    return await find(this.model, id)
  }

  async search(query) {
    let contentError = ''
    let data: any
    try {
      data = await this.model.query().where(query)
    } catch (error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
  }

  async create(data: any) {
    return await create(this.model, data)
  }

  async createOrUpdate(register: any, data: any) {
    return await createOrUpdate(this.model, register, data)
  }

  async findAndUpdate(id: any, data: any) {
    return await findAndUpdate(this.model, id, data)
  }

  async findAndDelete(id: any) {
    return await findAndDelete(this.model, id)
  }

  async getOrdersWithProducts(id: number): Promise<any> {
    const result =
      await Database.rawQuery(`select d.*, o.*, u.*, ohp.*, p.*, p.name as product_name, ohp.quantity as quantity_bought from order_details d
    left join orders o on d.order_id = o.id
    left join users u on u.id = o.user_id
    left join order_has_products ohp on ohp.order_id = o.id
    left join products p on ohp.product_id = p.id where o.id = '${id}'`)

    return result.rows
  }
}

export default new OrderDatailsRepository()
