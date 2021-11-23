import mercadopago from 'mercadopago'
import { DefaultConfigurationOmitQs } from 'mercadopago/models/default-configuration.model'
import { CreatePreApprovalPayload } from 'mercadopago/models/preapproval/create-payload.model'
import { UpdatePreApprovalPayload } from 'mercadopago/models/preapproval/update-payload.model'
import {
  PreApprovalCreateResponse,
  PreApprovalGetResponse,
  PreApprovalUpdateResponse
} from 'mercadopago/resources/preapproval'

export const getPreApprovalMP = async (
  id: string,
  configuration?: DefaultConfigurationOmitQs
): Promise<PreApprovalGetResponse> => {
  try {
    return await mercadopago.preapproval.get(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to getPreApprovalMP')
  }
}

export const createPreApprovalMP = async (
  payload: CreatePreApprovalPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<PreApprovalCreateResponse> => {
  try {
    return await mercadopago.preapproval.create(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to createPreApprovalMP')
  }
}

export const updatePreApprovalMP = async (
  payload: UpdatePreApprovalPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<PreApprovalUpdateResponse> => {
  try {
    return await mercadopago.preapproval.update(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to updatePreApprovalMP')
  }
}

export const cancelPreApprovalMP = async (
  id: string,
  configuration?: DefaultConfigurationOmitQs
): Promise<PreApprovalUpdateResponse> => {
  try {
    return await mercadopago.preapproval.cancel(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to cancelPreApprovalMP')
  }
}

export const pausePreApprovalMP = async (
  id: string,
  configuration?: DefaultConfigurationOmitQs
): Promise<PreApprovalUpdateResponse> => {
  try {
    return await mercadopago.preapproval.pause(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to pausePreApprovalMP')
  }
}
