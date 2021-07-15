import Logger from '@ioc:Adonis/Core/Logger'
import { mountResponse, notFound } from './ResponseUtils'

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
  let data = [], contentError = ""
  try{
    data = await Model.first()
  } catch(error) {
    logError('first', error)
    contentError = error
  }

  return mountResponse(data, contentError, "load")
}

export async function all (Model) {
  let data = [], contentError = ""
  try{
    data = await Model.all()
    // response = response.serialize()
  } catch(error) {
    logError('all', error)
    contentError = error
  }

  return mountResponse(data, contentError, "load")
}

export async function withTrashed (Model) {
  let data = [], contentError = ""
  try{
    data = await Model.where('deleted_at', '<>', null).fetch()
    // response = response.serialize()
  } catch(error) {
    logError('withTrashed', error)
    contentError = error
  }

  return mountResponse(data, contentError, "load")
}

export async function OnlyTrashed (Model) {
  let data = [], contentError = ""
  try{
    data = await Model.where('deleted_at', '<>', null).fetch()
    // response = response.serialize()
  } catch(error) {
    logError('OnlyTrashed', error)
    contentError = error
  }

  return mountResponse(data, contentError, "load")
}

export async function find (Model, id: any) {
  let data = [], contentError = ""
  try{
    data = await Model.find(id)
    // response = response.serialize()
  } catch(error) {
    logError('find', error)
    contentError = error
  }

  return mountResponse(data, contentError, "found")
}

export async function findByEmail (Model, email: any) {
  let data = [], contentError = ""
  try{
    data = await Model.find(email)
    // response = response.serialize()
  } catch(error) {
    logError('find', error)
    contentError = error
  }

  return mountResponse(data, contentError, "found")
}

export async function findOrFail (Model, id: any) {
  let data = [], contentError = ""
  try{
    data = await Model.findOrFail(id)
    // response = response.serialize()
  } catch(error) {
    logError('findOrFail', error)
    contentError = error
  }

  return mountResponse(data, contentError, "found")
}

export async function create (Model, body: any) {
  let data = [], contentError = ""
  try {
    data = await Model.create(body)
    // response = response.serialize()
  } catch (error) {
    logError('create', error)
    contentError = error
  }

  data = data["$attributes"] ?? []
  return mountResponse(data, contentError, "create")
}

export async function createOrUpdate (Model, register, body: any) {
  let data = [], contentError = ""
  try {
    data = Model.updateOrCreate({ ...register } ,body)
    // response = response.serialize()
  } catch (error) {
    logError('createOrUpdate', error)
    contentError = error
  }

  return mountResponse(data, contentError, "create")
}

export async function findAndUpdate (Model, id: any, body: any) {
  let data = [], contentError = ""

  try {
    await Model.query().where('id', id).update(body)
  } catch (error) {
    logError('findAndUpdate', error)
    contentError = error
  }
  const { data: response } = await find(Model, id)
  data = response ?? {}

  return mountResponse(data, contentError, "update")
}

export async function findAndDelete (Model, id: any) {
  let data = [], contentError = ""
  const res = await Model.query().where('id', id).first()

  if(!res) return notFound()
  
  try {
    data = await Model.query().where('id', id).delete()
  } catch (error) {
    logError('findAndDelete', error)
    contentError = error
  }

  data = res["$attributes"] ?? {}
  return mountResponse(data, contentError, "delete")
}

export async function findAndRestore (Model, id: any) {
  let data = [], contentError = ""
  try {
    data = await Model.findOrFail(id).update({ deleted_at: null })
  } catch (error) {
    logError('findAndRestore', error)
    contentError = error
  }

  return mountResponse(data, contentError, "restore")
}

export async function findAndDestroy (Model, id: any) {
  let data = [], contentError = ""
  try {
    data = await Model.findOrFail(id).delete()
  } catch (error) {
    logError('findAndDestroy', error)
    contentError = error
  }

  return mountResponse(data, contentError, "forceDelete")
}

