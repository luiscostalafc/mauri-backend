import mercadopago from 'mercadopago';
import { CreateCardPayload } from 'mercadopago/models/cards/create-payload';
import { UpdateCardPayload } from 'mercadopago/models/cards/update-payload';
import { DefaultConfigurationOmitQs } from 'mercadopago/models/default-configuration.model';
import {
    CardCreateResponse,
    CardDeleteResponse,
    CardGetResponse,
    CardUpdateResponse
} from 'mercadopago/resources/cards';

export const getAllUserCardsMP = async (
  customerId: string,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardGetResponse> => {
  try {
    return await mercadopago.card.all(customerId, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to getAllUserCardsMP')
  }
}

export const getUserCardMP = async (
  customerId: string,
  id: string | number,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardGetResponse> => {
  try {
    return await mercadopago.card.get(customerId, id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to getUserCardMP')
  }
}

export const findUserCardByIdMP = async (
  customerId: string,
  id: string | number,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardGetResponse> => {
  try {
    return await mercadopago.card.findById(customerId, id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to findUserCardByIdMP')
  }
}

export const createUserCardMP = async (
  payload: CreateCardPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardCreateResponse> => {
  try {
    return await mercadopago.card.create(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to createUserCardMP')
  }
}

export const updateUserCardMP = async (
  payload: UpdateCardPayload,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardUpdateResponse> => {
  try {
    return await mercadopago.card.update(payload, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to updateUserCard')
  }
}

export const deleteUserCardMP = async (
  id: string | number,
  configuration?: DefaultConfigurationOmitQs
): Promise<CardDeleteResponse> => {
  try {
    return await mercadopago.card.delete(id, configuration)
  } catch (error) {
    console.error(error)
    throw new Error('Error to deleteUserCard')
  }
}
