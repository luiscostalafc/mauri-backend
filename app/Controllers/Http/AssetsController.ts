/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AssetsRepository from 'App/Repositories/AssetsRepository'
import { fileUpload, getFileUpload } from 'App/Services/FileUploadService'
import { validationError } from 'App/Services/ResponseUtils'
import { AssetSchema } from 'App/Validators'
import { AssetSearchSchema } from 'App/Validators/AssetSearchSchema'

export default class AssetsController {
  constructor (private readonly repository = AssetsRepository) {}

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    return response
      .status(register.statusCode)
      .json(register)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: AssetSchema})
    } catch (error) {
      return response
        .status(422)
        .json(validationError(error))
    }
    const requestData = request.all()
    const file = request.file('file')
    if (!file) {
      return response
        .status(422)
        .json(validationError('Arquivo não encontrado'))
    }

    const fileData = await fileUpload({file, request: requestData})
    const register = await this.repository.create(fileData)
    return response
      .status(register.statusCode)
      .json(register)
  }

  async search ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: AssetSearchSchema})
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

  async show ({ params, response }: HttpContextContract) {
    const register = await this.repository.find(params.id)
    const path = getFileUpload(register.data)

    return response
      .status(register.statusCode)
      .attachment(path)
  }

  async update ({ params, request, response }: HttpContextContract) {
    try {
      await request.validate({schema: AssetSchema})
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
