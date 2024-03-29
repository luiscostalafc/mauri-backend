/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import Logger from '@ioc:Adonis/Core/Logger'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle (error, ctx) {
    if (error.code === 'E_UNAUTHORIZED_ACCESS') {     
      return ctx.response
        .status(401)
        .json({
          returnType: 'error',
          message: 'Usuário não logado',
          messageErrors: ['Não autorizado'],
        })
    }
    return super.handle(error, ctx)
  }
}
