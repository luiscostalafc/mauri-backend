import Application from '@ioc:Adonis/Core/Application'
export const fileUpload = async ({file, request}) => {
  const path = `${new Date().getTime()}.${file.extname}`
  const fileData = {
    asset: file.clientName,
    mime: file.extname,
    path,
    user_id: request.user_id || null,
    group_id: request.group_id || null,
    product_id: request.product_id || null,
  }

  await file.move(Application.tmpPath('uploads'), {
    name: path,
  })

  return fileData
}

export const getFileUpload = (data) => {
  const { path: pathData } = data as unknown as { path: string }
  const path = `${Application.tmpPath('uploads')}/${pathData}`
  return path
}