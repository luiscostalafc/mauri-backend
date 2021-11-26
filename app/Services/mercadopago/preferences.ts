import mercadopago from 'mercadopago'
import { DefaultConfigurationOmitQs } from 'mercadopago/models/default-configuration.model'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'
import { UpdatePreferencePayload } from 'mercadopago/models/preferences/update-payload.model'
import {
  PreferenceCreateResponse,
  PreferenceGetResponse,
  PreferenceUpdateResponse
} from 'mercadopago/resources/preferences'

class MercadoPagoPreferencesService {
  async getPreferenceMP(
    id: string,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PreferenceGetResponse> {
    try {
      return await mercadopago.preferences.get(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to getPreferenceMP')
    }
  }

  async createPreferenceMP(
    payload: CreatePreferencePayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PreferenceCreateResponse> {
    try {
      return await mercadopago.preferences.create(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to createPreferenceMP')
    }
  }

  async updatePreferenceMP(
    payload: UpdatePreferencePayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PreferenceUpdateResponse> {
    try {
      return await mercadopago.preferences.update(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to updatePreferenceMP')
    }
  }
}
export default new MercadoPagoPreferencesService()
