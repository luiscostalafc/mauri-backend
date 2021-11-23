import mercadopago from 'mercadopago'
import { DefaultConfigurationOmitQs } from 'mercadopago/models/default-configuration.model'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'
import { UpdatePreferencePayload } from 'mercadopago/models/preferences/update-payload.model'
import { PreferenceCreateResponse, PreferenceGetResponse, PreferenceUpdateResponse } from 'mercadopago/resources/preferences'

export const getPreferenceMP = async (
  id: string,
  configuration?: DefaultConfigurationOmitQs
): Promise<PreferenceGetResponse> => {
  try {
    return await mercadopago.preferences.get(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to getPreferenceMP')
  }
}

export const createPreferenceMP = async (
  payload: CreatePreferencePayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<PreferenceCreateResponse> => {
  try {
    return await mercadopago.preferences.create(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to createPreferenceMP')
  }
}

export const updatePreferenceMP = async (
  payload: UpdatePreferencePayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<PreferenceUpdateResponse> => {
  try {
    return await mercadopago.preferences.update(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to updatePreferenceMP')
  }
}
