/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Logger from '@ioc:Adonis/Core/Logger'

import { first, all, create, findAndUpdate, find, createOrUpdate, findAndDelete } from '../Services/CRUD'
import Product from 'App/Models/Product'

class ProductsRepository {
  protected model: any
  protected obj = []
  protected contentError = []
  protected returnMsg = ''
  protected statusCode = 400
  protected options = 0

  public logError (func, error) {
    Logger.warn(`Repository ${func} Error: ${error}`)
  }

  castValues (data) {
    data.inactive = Boolean(data?.inactive)
    data.group_id = Number(data?.group_id)
    data.subgroup_id = Number(data?.subgroup_id)
    data.year_start = Number(data?.year_start)
    data.year_end = Number(data?.year_end)
    data.quantity_used = Number(data?.quantity_used)
    data.quantity_package = Number(data?.quantity_package)
    data.size = Number(data?.size)
    data.height = Number(data?.height)
    data.width = Number(data?.width)
    data.lenth = Number(data?.lenth)
    data.weight = Number(data?.weight)
    data.inner_diameter = Number(data?.inner_diameter)
    data.external_diameter = Number(data?.external_diameter)

    return data
  }

  constructor () {
    this.model = Product
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async find (id) {
    return await find(this.model, id)
  }

  async create (data: any) {
    data = this.castValues(data)
    return await create(this.model, data)
  }

  async createOrUpdate (id: any, data: any) {
    data = this.castValues(data)
    return await createOrUpdate(this.model, id, data)
  }

  async findAndUpdate (id: any, data: any) {
    data = this.castValues(data)
    return await findAndUpdate(this.model, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.model, id)
  }
}

export default new ProductsRepository()
