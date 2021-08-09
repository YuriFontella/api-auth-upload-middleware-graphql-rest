'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {

  app.decorate('QuerySession', {

    add: async (token, user_id) => {
      await app.knex('sessions')
        .insert({ user_id: user_id, access_token: app.crypto.hash(token) })
    }
  })
})