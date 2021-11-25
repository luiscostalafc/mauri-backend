import mercadopago from 'mercadopago'
import { CreateCustomerPayload } from 'mercadopago/models/customers/create-payload.model'
import { CustomerSearchConfiguration } from 'mercadopago/models/customers/search-configuration.model'
import { UpdateCustomerPayload } from 'mercadopago/models/customers/update-payload.model'
import { DefaultConfigurationOmitQs } from 'mercadopago/models/default-configuration.model'
import { CardDeleteResponse, CardGetResponse } from 'mercadopago/resources/cards'
import {
  CustomerCreateResponse,
  CustomerSearchResponse,
  CustomerUpdateResponse
} from 'mercadopago/resources/customers'

class MercadoPagoCustomerService {
  async get(id: string, configuration?: DefaultConfigurationOmitQs): Promise<CardGetResponse> {
    try {
      return await mercadopago.customers.get(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to get')
    }
  }

  async findCustomerByIdMP(
    id: string,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<CardGetResponse> {
    try {
      return await mercadopago.customers.findById(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to findCustomerByIdMP')
    }
  }

  async search(configuration: CustomerSearchConfiguration): Promise<CustomerSearchResponse> {
    try {
      return await mercadopago.customers.search(configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to search')
    }
  }

  async create(
    payload: CreateCustomerPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<CustomerCreateResponse> {
    try {
      return await mercadopago.customers.create(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to create')
    }
  }

  async update(
    payload: UpdateCustomerPayload,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<CustomerUpdateResponse> {
    try {
      return await mercadopago.customers.update(payload, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to update')
    }
  }

  async delete(
    id: string,
    configuration?: DefaultConfigurationOmitQs
  ): Promise<CardDeleteResponse> {
    try {
      return await mercadopago.customers.remove(id, configuration)
    } catch (error) {
      console.error(error)
      throw new Error('Error to delete')
    }
  }
}

export default new MercadoPagoCustomerService()
