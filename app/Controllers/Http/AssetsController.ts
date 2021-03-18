/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AssetsRepository from 'App/Repositories/AssetsRepository'
import { getErrors } from 'App/Services/MessageErros'
import { AssetSchema } from 'App/Validators'
import { AssetSearchSchema } from 'App/Validators/AssetSearchSchema'

export default class AssetsController {
  constructor (private readonly repository = AssetsRepository) {}

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: AssetSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .status(422)
        .json({
          returnType: 'error',
          message: 'Erro na validação',
          messageErrors: msg,
        })
    }
    const requestData = request.all()
    const file = request.file('file')
    if (!file) {
      return response
        .status(422)
        .json({
          returnType: 'error',
          message: 'Erro na validação',
          messageErrors: ['Arquivo não encontrado'],
        })
    }

    const path = `${new Date().getTime()}.${file.extname}`
    const fileData = {
      asset: file.clientName,
      mime: file.extname,
      path,
      user_id: requestData.user_id || null,
      group_id: requestData.group_id || null,
      product_id: requestData.product_id || null,
    }

    await file.move(Application.tmpPath('uploads'), {
      name: path,
    })

    const register = await this.repository.create(fileData)
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async search ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: AssetSearchSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .status(422)
        .json({
          returnType: 'error',
          message: 'Erro na validação',
          messageErrors: msg,
        })
    }

    const register = await this.repository.search(request.all())
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async show ({ params, response }: HttpContextContract) {
    const register = await this.repository.find(params.id)
    const { data, statusCode, returnType, message, contentError } = register
    const { path: pathData } = data as unknown as { path: string }
    const path = `${Application.tmpPath('uploads')}/${pathData}`

    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .attachment(path)
  }

  async update ({ params, request, response }: HttpContextContract) {
    try {
      await request.validate({schema: AssetSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .status(422)
        .json({
          returnType: 'error',
          message: 'Erro na validação',
          messageErrors: msg,
        })
    }

    const register = await this.repository.findAndUpdate(params.id, request.all())
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }

  async destroy ({ params, response }: HttpContextContract) {
    const register = await this.repository.findAndDelete(params.id)
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .status(statusCode)
      .json({
        ...data,
        returnType,
        message,
        contentError,
      })
  }
}
