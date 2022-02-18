/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Logger from '@ioc:Adonis/Core/Logger'
import MercadoPagoTransactions from 'App/Models/MercadoPago'

type Transaction = {
    method?: string
    user?: any
    request?: any
    response?: any
}


class MercadopagoTransactionsRepository {

  private static logError (func, error) {
    Logger.warn(`Repository ${func} Error: ${error}`)
  }

  async createTransaction(transaction : Transaction){
      Logger.info('received new transaction')
      return await MercadoPagoTransactions.create(transaction)
  }

}

export default new MercadopagoTransactionsRepository()
