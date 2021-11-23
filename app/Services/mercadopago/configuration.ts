import mercadopago from 'mercadopago';
import { ConfigOptions, MercadoPagoConfig } from 'mercadopago/configuration';

export const configureMP = (options: ConfigOptions) => mercadopago.configurations.configure(options)
export const getClientIdMP = () => mercadopago.configurations.getClientId()
export const getClientSecretMP = (): string => mercadopago.configurations.getClientSecret()
export const getPlatformIdMP = (): string => mercadopago.configurations.getPlatformId()
export const getCorporationIdMP = (): string => mercadopago.configurations.getCorporationId()
export const getIntegratorIdMP = (): string => mercadopago.configurations.getIntegratorId()
export const setAccessTokenMP = (token: string): MercadoPagoConfig =>
  mercadopago.configurations.setAccessToken(token)
export const getAccessTokenMP = (): string => mercadopago.configurations.getAccessToken()
export const setRefreshTokenMP = (refreshToken: string): MercadoPagoConfig =>
  mercadopago.configurations.setRefreshToken(refreshToken)
export const getRefreshTokenMP = (): string => mercadopago.configurations.getRefreshToken()
export const areTestsRunnningMP = (): string => mercadopago.configurations.areTestsRunnning()
