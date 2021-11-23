/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import { Ignitor } from '@adonisjs/core/build/standalone'
import mercadopago from 'mercadopago'
import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'

sourceMapSupport.install({ handleUncaughtExceptions: false })

const MPBootstrap = () => {
  const mercadoPagoToken = process.env.MP_TOKEN
  if (!mercadoPagoToken) {
    throw new Error('MP_TOKEN is not set')
  }
  mercadopago.configurations.setAccessToken(mercadoPagoToken)
}

new Ignitor(__dirname)
  .httpServer()
  .start()
  .then(() => MPBootstrap())
  .then(() => console.log('🚀  Servidor rodando bicho!!! 🤩'))
  .catch((error) => console.error(error))
