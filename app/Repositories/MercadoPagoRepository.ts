/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Logger from '@ioc:Adonis/Core/Logger'
import User from 'App/Models/User'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class UsersRepository {
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
    this.model = User
  }

  castValues (data) {
    data.is_provider = Boolean(data?.is_provider)
    data.inactive = Boolean(data?.inactive)

    return data
  }

  async first () {
    return await first(this.model)
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

  async all () {
    return await all(this.model)
  }

  async find (id) {
    return await find(this.model, id)
  }

  async findByEmail (email: string) {
    const data = await User.query()
      // .preload('address')
      // .preload('card')
      // .preload('order')
      // .preload('permission')
      // .preload('phone')
      // .preload('userGroup')
      .where('email', email)
      .first()

    const retunData = data?.serialize ? data.serialize() : []
    return mountResponse(retunData, '', 'load')
  }

  async create (data: any) {
    data = this.castValues(data)
    return await create(this.model, data)
  }

  async createOrUpdate (register: any, data: any) {
    data = this.castValues(data)
    return await createOrUpdate(this.model, register, data)
  }

  async findAndUpdate (id: any, data: any) {
    data = this.castValues(data)
    return await findAndUpdate(this.model, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.model, id)
  }
}

export default new UsersRepository()
