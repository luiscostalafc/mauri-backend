import mercadopago from 'mercadopago'
import { CreateCustomerPayload } from 'mercadopago/models/customers/create-payload.model'
import { CustomerSearchConfiguration } from 'mercadopago/models/customers/search-configuration.model'
import { UpdateCustomerPayload } from 'mercadopago/models/customers/update-payload.model'
import { DefaultConfigurationOmitQs } from 'mercadopago/models/default-configuration.model'
import { CardDeleteResponse, CardGetResponse } from 'mercadopago/resources/cards'
import { CustomerCreateResponse, CustomerSearchResponse, CustomerUpdateResponse } from 'mercadopago/resources/customers'

export const getCustomerMP = async (
  id: string,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardGetResponse> => {
  try {
    return await mercadopago.customers.get(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to getCustomerMP')
  }
}

export const findCustomerByIdMP = async (
  id: string,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardGetResponse> => {
  try {
    return await mercadopago.customers.findById(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to findCustomerByIdMP')
  }
}

export const searchCustomerMP = async (
  configuration: CustomerSearchConfiguration
): Promise<CustomerSearchResponse> => {
  try {
    return await mercadopago.customers.search(configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to searchCustomerMP')
  }
}

export const createCustomerMP = async (
  payload: CreateCustomerPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<CustomerCreateResponse> => {
  try {
    return await mercadopago.customers.create(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to createCustomerMP')
  }
}

export const updateCustomerMP = async (
  payload: UpdateCustomerPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<CustomerUpdateResponse> => {
  try {
    return await mercadopago.customers.update(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to updateCustomerMP')
  }
}

export const deleteCustomerMP = async (
  id: string,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardDeleteResponse> => {
  try {
    return await mercadopago.customers.remove(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to deleteCustomerMP')
  }
}
