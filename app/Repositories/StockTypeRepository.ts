/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Logger from '@ioc:Adonis/Core/Logger'
import StockType from 'App/Models/StockType'
import { mountResponse } from 'App/Services/ResponseUtils'
import { create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class StockTypesRepository {
  protected model: any
  protected obj = []
  protected contentError = []
  protected returnMsg = ''
  protected statusCode = 400
  protected options = 0

  public logError (func, error) {
    Logger.warn(`Repository ${func} Error: ${error}`)
  }

  constructor () {
    this.model = StockType
  }

  async first () {
    return await first(this.model)
  }

  async all (request?: StockType | {}) {
    let contentError = ''
    let data: any
    if (request !== {}) {
      try{
        data = await StockType.query()
          .where({...request})
      } catch(error) {
        console.log(error)
        contentError = error
      }
    } else {
      try{
        data = await StockType.query()
          .exec()
      } catch(error) {
        console.log(error)
        contentError = error
      }
    }

    return mountResponse(data, contentError, 'load')
  }

  async find (id) {
    return await find(this.model, id)
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

  async create (data: any) {
    return await create(this.model, data)
  }

  async createOrUpdate (register: any, data: any) {
    return await createOrUpdate(this.model, register, data)
  }

  async findAndUpdate (id: any, data: any) {
    return await findAndUpdate(this.model, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.model, id)
  }
}

export default new StockTypesRepository()
