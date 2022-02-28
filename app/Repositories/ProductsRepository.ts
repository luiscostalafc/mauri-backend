/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Logger from '@ioc:Adonis/Core/Logger'
import Database from '@ioc:Adonis/Lucid/Database'
import Group from 'App/Models/Group'
import Product from 'App/Models/Product'
import Subgroup from 'App/Models/Subgroup'
import Synonym from 'App/Models/Synonym'
import { mountResponse } from 'App/Services/ResponseUtils'
import { create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

type Excel = Array<{
  0: string,
  1: {
    product: Product,
    group: Group,
    subgroup: Subgroup,
    synonyms: Synonym[]
  }
}>

class ProductsRepository {
  protected model: any
  protected group: any
  protected subgroup: any
  protected synonym: any
  protected obj = []
  protected contentError = []
  protected returnMsg = ''
  protected statusCode = 400
  protected options = 0

  public logError (func: any, error: any) {
    Logger.warn(`Repository ${func} Error: ${error}`)
  }

  castValues (data: { inactive: boolean }) {
    data.inactive = Boolean(data?.inactive)
    return data
  }

  constructor () {
    this.model = Product
    this.group = Group
    this.subgroup = Subgroup
    this.synonym = Synonym
  }

  async first () {
    return await first(this.model)
  }

  async all (request?: Product | {}) {
    let contentError = ''
    let data: any
    if (request !== {}) {
      try{
        data = await this.model.query()
          .preload('group')
          .preload('subgroup')
          .where(request)
      } catch(error) {
        console.log(error)
        contentError = error
      }
    } else {
      try{
        data = await this.model.query()
          .preload('group')
          .preload('subgroup')
          .get()
      } catch(error) {
        console.log(error)
        contentError = error
      }
    }

    return mountResponse(data, contentError, 'load')
  }

  async search (query: any) {
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

  getValueByOperator (operator, value) {
    if (operator === '%') return `%${value}%`
    if (operator === '=') return value
    return ''
  }

  getRestrictionQuery (restrictions) {
    const operators = {
      "%": 'LIKE',
      "=": '='
    }
    let res = ''
    restrictions.forEach(({ name, operator, value}, index) => {
      const where = index === 0 ? 'WHERE' : 'AND'
      res += `${where} ${name} ${operators[operator] ?? '='} '${this.getValueByOperator(operator, value)}'` 
    });
    return res
  }
  
  async distinct (name, restrictions) {
    const stringName = Object.values(name).join('')
    let restriction = ''
    if (restrictions?.length) {
      restriction = this.getRestrictionQuery(restrictions)
    }
    let contentError = ''
    let data: any
    try{
      data = await Database.rawQuery(`SELECT DISTINCT(${stringName}) FROM products ${restriction}`)
    } catch(error) {
      console.log(error)
      contentError = error
    }

    const clearData = !data?.rows ? [] : data.rows.map((d) => ({
      label: d[stringName],
      value: d[stringName]
    }))

    return mountResponse({data: clearData}, contentError, 'load')
  }

  async find (id: any) {
    return await find(this.model, id)
  }

  verifyIfIsNullLine (object: { [x: string]: any }) {
    return Object.values(object).every(x => x === null || x === '')
  }

  async firstOrCreateGroup (group: string) {
    try {
      const res = await Group.firstOrCreate({group},{group})
      return res.serialize().id
    } catch (error) {
      console.log(error)
      // console.log(group)
    }
  }
  async firstOrCreateSubgroup (subgroup: string) {
    try {
      const res = await Subgroup.create({subgroup},{subgroup})
      return res.serialize().id
    } catch (error) {
      console.log(error)
      // console.log(subgroup)
    }
  }
  async insertProduct (product: Product, groupId: number, subgroupId: number) {
    try {
      const res = await Product.create({...product, groupId, subgroupId})
      return res.serialize().id
    } catch (error) {
      console.log(error)
      // console.log({product, groupId, subgroupId})
    }
  }

  async insertSynonyms (synonyms: any[], productId: any) {
    const ids:any[] = []
    if (!synonyms.length) {
      return ids
    }
    for (const synonym of synonyms) {
      try {
        const res = await Synonym.create({
          synonym,
          productId,
        })
        ids.push(res.serialize().id)
      } catch (error) {
        console.log(error)
        console.log({synonyms, productId})
      }
    }
    return ids
  }

  async excel (data) {
    let contentError = ''
    const returnData:any = []
    const excelData:Excel = Object.entries(data)

     for (const d of excelData) {
       const { product, group, subgroup, synonyms } = d[1]
       if (!this.verifyIfIsNullLine(product) && group) {
        const groupId:any = await this.firstOrCreateGroup(group)
        const subgroupId = await this.firstOrCreateSubgroup(subgroup)
        const productId = await this.insertProduct(product, groupId, subgroupId)
        const synonymsIds = await this.insertSynonyms(synonyms, productId)

         returnData.push({ groupId, subgroupId, productId, synonymsIds })
       }
     }

    return mountResponse(returnData, contentError, 'load')
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

export default new ProductsRepository()
