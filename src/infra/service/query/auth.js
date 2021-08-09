'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {

  app.decorate('QueryAuth', {

    user: async (email) => {
      return await app.knex('users')
        .where({ email: email, status: true })
        .first()
    }
  })
})