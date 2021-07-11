/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import transations from '../../config/transations'
import { getErrors } from './MessageErros'
export type TypeFunction = 'login'|'load'|'found'|'create'|'update'|'delete' |'restore'|'forceDelete'

export const notFound = () => ({
  data: [],
  statusCode: 404,
  info: { statusCode: 404, returnType: "error", message: "Not Found", contentError: "Not Found"}
})

export const errorResponse = ({message, error, statusCode = 400}) => ({
  data: [],
  statusCode,
  info: { statusCode, returnType: "error", message, contentError: getErrors(error)}
})

export const validationError = (error) => ({
  data: [],
  statusCode: 422,
  info: { statusCode: 422, returnType: "error", message: "Erro na validação", contentError: getErrors(error)}
})

export const getResponseInfo = ({contentError, statusCode, typeFunction}) => {
  const code = statusCode ?? getStatusCode(contentError, typeFunction)
  return {
    statusCode: code,
    returnType: getHappen(code),
    message: getMessage(typeFunction, code),
    contentError: getErrors(contentError)
  }
}

export function mountResponse (data, contentError, typeFunction: TypeFunction) {
  const statusCode = getStatusCode(contentError, typeFunction)

  return {
    statusCode,
    data: getData(data),
    info: getResponseInfo({contentError, statusCode, typeFunction})
  }
}

export const getData = (data) => data ?? []

export function getStatusCode (contentError: any, typeFunction: TypeFunction): number {
  if (typeFunction === 'create') {
    return !contentError.length ? 201 : 400
  }
  return !contentError.length ? 200 : 400
}

export function getHappen (status: number): string {
  return (status < 200 || status > 300) ? 'error' : 'success'
}

export function getMessage (typeFunction: TypeFunction, statusCode: number): string {
  const happen = getHappen(statusCode)
  const msg = transations[typeFunction][happen]
  return msg || ''
}

export function getContentError (contentError: any): string {
  return (contentError.length) ? contentError.join(', ') : ''
}

export function mountHeader (type='success', message='Success', error=[]): object {
  const contentError = error ? this.getContentError(error) : ''
  return {
    returnType: type,
    message,
    contentError,
  }
}

