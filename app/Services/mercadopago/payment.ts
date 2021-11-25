import mercadopago from 'mercadopago'
import {
  DefaultConfigurationOmitQs,
  SearchConfiguration
} from 'mercadopago/models/default-configuration.model'
import { CapturePartialPaymentPayload } from 'mercadopago/models/payment/capture-partial-payload.model'
import { CreatePaymentPayload } from 'mercadopago/models/payment/create-payload.model'
import { UpdatePaymentPayload } from 'mercadopago/models/payment/update-payload.model'
import {
  PaymentCreateResponse,
  PaymentGetResponse,
  PaymentSearchResponse,
  PaymentUpdateResponse
} from 'mercadopago/resources/payment'

class MercadoPagoPaymentService {
  async getPaymentMP(
    id: number,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentGetResponse> {
    try {
      return await mercadopago.payment.get(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to getPaymentMP')
    }
  }

  async capturePaymentByIdMP(
    id: number,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentUpdateResponse> {
    try {
      return await mercadopago.payment.capture(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to capturePaymentByIdMP')
    }
  }

  async captureParcialPaymentMP(
    payload: CapturePartialPaymentPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentUpdateResponse> {
    try {
      return await mercadopago.payment.capturePartial(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to captureParcialPaymentMP')
    }
  }

  async createPaymentMP(
    payload: CreatePaymentPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentCreateResponse> {
    try {
      return await mercadopago.payment.create(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to createPaymentMP')
    }
  }

  async updatePaymentMP(
    payload: UpdatePaymentPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentUpdateResponse> {
    try {
      return await mercadopago.payment.update(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to updatePaymentMP')
    }
  }

  async searchPaymentMP(payload: SearchConfiguration): Promise<PaymentSearchResponse> {
    try {
      return await mercadopago.payment.search(payload)
    } catch (error) {
      console.error(error)
      throw new Error('Error to searchPayment')
    }
  }

  async deletePaymentMP(
    id: number,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentUpdateResponse> {
    try {
      return await mercadopago.payment.cancel(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to deletePayment')
    }
  }
}
export default new MercadoPagoPaymentService()
