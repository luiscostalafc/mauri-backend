import mercadopago from 'mercadopago'
import { DefaultConfigurationOmitQs } from 'mercadopago/models/default-configuration.model'
import { CreatePreApprovalPayload } from 'mercadopago/models/preapproval/create-payload.model'
import { UpdatePreApprovalPayload } from 'mercadopago/models/preapproval/update-payload.model'
import {
  PreApprovalCreateResponse,
  PreApprovalGetResponse,
  PreApprovalUpdateResponse
} from 'mercadopago/resources/preapproval'

class MercadoPagoPreapprovalService {
  async getPreApprovalMP(
    id: string,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PreApprovalGetResponse> {
    try {
      return await mercadopago.preapproval.get(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to getPreApprovalMP')
    }
  }

  async createPreApprovalMP(
    payload: CreatePreApprovalPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PreApprovalCreateResponse> {
    try {
      return await mercadopago.preapproval.create(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to createPreApprovalMP')
    }
  }

  async updatePreApprovalMP(
    payload: UpdatePreApprovalPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PreApprovalUpdateResponse> {
    try {
      return await mercadopago.preapproval.update(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to updatePreApprovalMP')
    }
  }

  async cancelPreApprovalMP(
    id: string,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PreApprovalUpdateResponse> {
    try {
      return await mercadopago.preapproval.cancel(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to cancelPreApprovalMP')
    }
  }

  async pausePreApprovalMP(
    id: string,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PreApprovalUpdateResponse> {
    try {
      return await mercadopago.preapproval.pause(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to pausePreApprovalMP')
    }
  }
}
export default new MercadoPagoPreapprovalService()
