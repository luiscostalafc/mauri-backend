import mercadopago from 'mercadopago'

export * from './card'
export * from './configuration'
export * from './customers'
export * from './merchant_orders'
export * from './payment'
export * from './preapproval'
export * from './preferences'

export const MPBootstrap = () => {
  const mercadoPagoToken =
    process.env.NODE_ENV === 'development' ? process.env.MP_DEV_TOKEN : process.env.MP_PROD_TOKEN
  if (!mercadoPagoToken) {
    throw new Error('MP_TOKEN is not set')
  }
  try {
    mercadopago.configurations.setAccessToken(mercadoPagoToken)
  } catch (error) {
    console.error('MP config error:', error)
  }
}
