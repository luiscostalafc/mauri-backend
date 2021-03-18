export const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
export const responseData = (response) => JSON.parse(response).$attributes