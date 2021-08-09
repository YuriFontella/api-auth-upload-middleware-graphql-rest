'use strict'

module.exports = (app) => {

  const login = async (email, password) => {

    const user = await app.QueryAuth.user(email)

    if (user) {

      const compare = app.bcrypt.compare(password, user.password)

      if (compare) {

        const token = await app.crypto.token()

        await app.QuerySession.add(token, user.id)

        return { user, token }
      }

    }

    return new Error('Usuário ou senha incorretos')
  }

  return {
    login
  }
}