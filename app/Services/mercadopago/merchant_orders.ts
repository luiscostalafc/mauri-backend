import mercadopago from 'mercadopago';
import { DefaultConfigurationOmitQs } from 'mercadopago/models/default-configuration.model';
import { CreateMerchantOrderPayload } from 'mercadopago/models/merchantOrders/create-payload';
import { UpdateMerchantOrderPayload } from 'mercadopago/models/merchantOrders/update-payload';
import {
  MerchantOrderCreateResponse,
  MerchantOrderGetResponse,
  MerchantOrderUpdateResponse
} from 'mercadopago/resources/merchantOrders';

export const getMerchantOrderMP = async (
  id: string | number,
  configuration?: DefaultConfigurationOmitQs
): Promise<MerchantOrderGetResponse> => {
  try {
    return await mercadopago.merchant_orders.get(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to getMerchantOrderMP')
  }
}

export const createMerchantOrderMP = async (
  payload: CreateMerchantOrderPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<MerchantOrderCreateResponse> => {
  try {
    return await mercadopago.merchant_orders.create(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to createMerchantOrderMP')
  }
}

export const updateMerchantOrderMP = async (
  payload: UpdateMerchantOrderPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<MerchantOrderUpdateResponse> => {
  try {
    return await mercadopago.merchant_orders.update(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to updateMerchantOrderMP')
  }
}
