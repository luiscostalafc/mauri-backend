export async function getToken (email, password, auth) {
  try {
    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '10 days',
    })

    return {
      returnType: 'success',
      message: 'User logged',
      contentError: '',
      status: 200,
      data: token.toJSON(),
    }
  } catch (error) {
    if (error.code === 'E_INVALID_AUTH_UID') {
      return {
        returnType: 'error',
        message: 'Usuario nao encontrado',
        contentError: 'User not found',
        status: 401,
        data: {},
      }
    }

    if (error.code === 'E_INVALID_AUTH_PASSWORD') {
      return {
        returnType: 'error',
        message: 'Email ou password invalidos',
        contentError: 'Email or password is wrong',
        status: 401,
        data: {},
      }
    }

    return {
      returnType: 'error',
      message: 'Erro inesperado',
      contentError: error,
      status: 401,
      data: {},
    }
  }
}
