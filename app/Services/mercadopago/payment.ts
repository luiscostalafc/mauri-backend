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
  async get(
    id: number,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentGetResponse> {
    try {
      return await mercadopago.payment.get(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to get')
    }
  }

  async capture(
    id: number,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentUpdateResponse> {
    try {
      return await mercadopago.payment.capture(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to capture')
    }
  }

  async captureParcial(
    payload: CapturePartialPaymentPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentUpdateResponse> {
    try {
      return await mercadopago.payment.capturePartial(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to captureParcial')
    }
  }

  async create(
    payload: CreatePaymentPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentCreateResponse> {
    try {
      return await mercadopago.payment.create(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to create')
    }
  }

  async update(
    payload: UpdatePaymentPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<PaymentUpdateResponse> {
    try {
      return await mercadopago.payment.update(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to update')
    }
  }

  async search(payload: SearchConfiguration): Promise<PaymentSearchResponse> {
    try {
      return await mercadopago.payment.search(payload)
    } catch (error) {
      console.error(error)
      throw new Error('Error to searchPayment')
    }
  }

  async delete(
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
