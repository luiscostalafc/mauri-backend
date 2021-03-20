import Logger from '@ioc:Adonis/Core/Logger'
import { getHappen, getMessage, getSatusCode } from './ResponseUtils'

let data: any
let statusCode = 400
let message = ''
let returnType = 'error'
let contentError = []
let response: Model

declare interface Model {
  $attributes: any
  $columns: any
  $extras: any
  $isDeleted: boolean
  $isLocal: boolean
  $isPersisted: boolean
  $original: any
  $preloaded: any
  $sideloaded: any
  cachedGetters: any
  fillInvoked: boolean
  serialize: () => any
}

export async function logError (func: string, error: any) {
  Logger.warn(`Repository ${func} Error: ${error}`)
}

export async function first (Model) {
  try{
    response = await Model.first()
  } catch(error) {
    logError('first', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'load')
  returnType = getHappen(statusCode)
  message = getMessage('load', statusCode)
  
  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

export async function all (Model) {
  try{
    response = await Model.all()
    response = response.serialize()
  } catch(error) {
    logError('all', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'load')
  returnType = getHappen(statusCode)
  message = getMessage('load', statusCode)

  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

export async function withTrashed (Model) {
  try{
    response = await Model.where('deleted_at', '<>', null).fetch()
    response = response.serialize()
  } catch(error) {
    logError('withTrashed', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'load')
  returnType = getHappen(statusCode)
  message = getMessage('load', statusCode)

  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

export async function OnlyTrashed (Model) {
  try{
    response = await Model.where('deleted_at', '<>', null).fetch()
    response = response.serialize()
  } catch(error) {
    logError('OnlyTrashed', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'load')
  returnType = getHappen(statusCode)
  message = getMessage('load', statusCode)

  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

export async function find (Model, id: any) {
  try{
    response = await Model.find(id)
    response = response.serialize()
  } catch(error) {
    logError('find', error)
    contentError = error
  }

  statusCode = data ? 200 : 404
  returnType = getHappen(statusCode)
  message = getMessage('found', statusCode)

  data = response.serialize() ?? {}
  return { data, statusCode, returnType, message, contentError }
}

export async function findByEmail (Model, email: any) {
  try{
    response = await Model.find(email)
    response = response.serialize()
  } catch(error) {
    logError('find', error)
    contentError = error
  }

  statusCode = data ? 200 : 404
  returnType = getHappen(statusCode)
  message = getMessage('found', statusCode)

  data = response.serialize() ?? {}
  return { data, statusCode, returnType, message, contentError }
}

export async function findOrFail (Model, id: any) {
  try{
    response = await Model.findOrFail(id)
    response = response.serialize()
  } catch(error) {
    logError('findOrFail', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'found')
  returnType = getHappen(statusCode)
  message = getMessage('found', statusCode)

  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

export async function create (Model, body: any) {
  try {
    response = await Model.create(body)
    response = response.serialize()
  } catch (error) {
    logError('create', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'create')
  returnType = getHappen(statusCode)
  message = getMessage('create', statusCode)

  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

export async function createOrUpdate (Model, id, body: any) {
  try {
    response = Model.updateOrCreate({ id } ,body)
    response = response.serialize()
  } catch (error) {
    logError('createOrUpdate', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'create')
  returnType = getHappen(statusCode)
  message = getMessage('create', statusCode)

  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

export async function findAndUpdate (Model, id: any, body: any) {
  let contentError = ''
  // const res = await Model.query().where('id', id)

  // if(!res.length) {
  //   statusCode = 404
  //   returnType = getHappen(statusCode)
  //   message = getMessage('found', statusCode)

  //   return { data: {}, statusCode, returnType, message, contentError }
  // }

  try {
    response = await Model.query().where('id', id).update(body)
    response = response.serialize()
  } catch (error) {
    logError('findAndUpdate', error)
    contentError = error
  }

  data = response.serialize() ?? {}
  statusCode = contentError.length ? 400 : 200
  returnType = getHappen(statusCode)
  message = getMessage('update', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function findAndDelete (Model, id: any) {
  const res = await Model.query().where('id', id)

  if(!res.length) {
    statusCode = 404
    returnType = getHappen(statusCode)
    message = getMessage('found', statusCode)

    return { data: {}, statusCode, returnType, message, contentError }
  }

  try {
    response = await Model.query().where('id', id).delete()
    response = response.serialize()
  } catch (error) {
    logError('findAndDelete', error)
    contentError = error
  }
  data = response.serialize() ?? {}
  statusCode = getSatusCode(contentError, 'delete')
  returnType = getHappen(statusCode)
  message = getMessage('delete', statusCode)

  return { data, statusCode, returnType, message, contentError }
}

export async function findAndRestore (Model, id: any) {
  try {
    response = await Model.findOrFail(id).update({ deleted_at: null })
    response = response.serialize()
  } catch (error) {
    logError('findAndRestore', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'restore')
  returnType = getHappen(statusCode)
  message = getMessage('restore', statusCode)

  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

export async function findAndDestroy (Model, id: any) {
  try {
    response = await Model.findOrFail(id).delete()
    response = response.serialize()
  } catch (error) {
    logError('findAndDestroy', error)
    contentError = error
  }

  statusCode = getSatusCode(contentError, 'forceDelete')
  returnType = getHappen(statusCode)
  message = getMessage('forceDelete', statusCode)

  data = response ?? []
  return { data, statusCode, returnType, message, contentError }
}

