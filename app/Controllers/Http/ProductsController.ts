/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductsRepository from 'App/Repositories/ProductsRepository'
import { validationError } from 'App/Services/ResponseUtils'
import { ProductSchema } from 'App/Validators'
import { ProductDistinctSchema } from 'App/Validators/ProductDistinctSchema'
import { ProductSearchSchema } from 'App/Validators/ProductSearchSchema'

export default class ProductsController {
  constructor (private readonly repository = ProductsRepository) {}

  async index ({ response, request }: HttpContextContract) {
    const register = await this.repository.all(request.all())
    return response
      .status(register.statusCode)
      .json(register)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ProductSchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }

    const register = await this.repository.create(request.all())
    return response
      .status(register.statusCode)
      .json(register)
  }

  async excel ({ request, response }: HttpContextContract) {
    const register = await this.repository.excel(request.all())
    return response
      .status(register.statusCode)
      .json(register)
  }

  async search ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ProductSearchSchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }

    const register = await this.repository.search(request.all())
    return response
      .status(register.statusCode)
      .json(register)
  }

  async distinct ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ProductDistinctSchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }
    const {name, restrictions} = request.all()
    const register = await this.repository.distinct(name, restrictions)
    return response
      .status(register.statusCode)
      .json(register)
  }

  async show ({ params, response }: HttpContextContract) {
    const register = await this.repository.find(params.id)
    return response
      .status(register.statusCode)
      .json(register)
  }

  async update ({ params, request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ProductSchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }

    const register = await this.repository.findAndUpdate(params.id, request.all())
    return response
      .status(register.statusCode)
      .json(register)
  }

  async destroy ({ params, response }: HttpContextContract) {
    const register = await this.repository.findAndDelete(params.id)
    return response
      .status(register.statusCode)
      .json(register)
  }
}
