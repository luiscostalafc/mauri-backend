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

export const getPaymentMP = async (
  id: number,
  configuration?: DefaultConfigurationOmitQs
): Promise<PaymentGetResponse> => {
  try {
    return await mercadopago.payment.get(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to getPaymentMP')
  }
}

export const capturePaymentByIdMP = async (
  id: number,
  configuration?: DefaultConfigurationOmitQs
): Promise<PaymentUpdateResponse> => {
  try {
    return await mercadopago.payment.capture(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to capturePaymentByIdMP')
  }
}

export const captureParcialPaymentMP = async (
  payload: CapturePartialPaymentPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<PaymentUpdateResponse> => {
  try {
    return await mercadopago.payment.capturePartial(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to captureParcialPaymentMP')
  }
}

export const createPaymentMP = async (
  payload: CreatePaymentPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<PaymentCreateResponse> => {
  try {
    return await mercadopago.payment.create(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to createPaymentMP')
  }
}

export const updatePaymentMP = async (
  payload: UpdatePaymentPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<PaymentUpdateResponse> => {
  try {
    return await mercadopago.payment.update(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to updatePaymentMP')
  }
}

export const searchPaymentMP = async (
  payload: SearchConfiguration
): Promise<PaymentSearchResponse> => {
  try {
    return await mercadopago.payment.search(payload)
  } catch (error) {
    console.error(error)
    throw new Error('Error to searchPayment')
  }
}

export const deletePaymentMP = async (
  id: number,
  configuration?: DefaultConfigurationOmitQs
): Promise<PaymentUpdateResponse> => {
  try {
    return await mercadopago.payment.cancel(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to deletePayment')
  }
}
