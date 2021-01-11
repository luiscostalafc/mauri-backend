/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Logger from '@ioc:Adonis/Core/Logger'
import Product from 'App/Models/Product'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

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
    return data
  }

  constructor () {
    this.model = Product
  }

  async first () {
    return await first(this.model)
  }

  async all (request?) {
    let data
    let contentError = []
    if (request !== {}) {
      try {
        data = await Product.query().where(request)
      } catch (error) {
        data = []
        contentError = error
      }
      return mountResponse(data, contentError, 'load')
    }
    return await all(this.model)
  }

  async search (query) {
    let contentError = ''
    let data: any
    try{
      data = await this.model.query().where(query)
    } catch(error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
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
