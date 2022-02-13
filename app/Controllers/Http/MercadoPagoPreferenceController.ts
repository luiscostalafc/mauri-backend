/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MercadoPagoPreferencesService from '../../Services/mercadopago/preferences'


export default class MercadopagoPreferenceController {
  constructor(
      private readonly preferenceService= MercadoPagoPreferencesService
  ) {}

  async createPreference({ request, response }: HttpContextContract) {
    const data = request.all()
    const createdPreference = await this.preferenceService.createPreferenceMP(data, {})
    return response.status(201).json(createdPreference) 
  }
}

