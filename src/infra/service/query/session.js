'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {

  app.decorate('QuerySession', {

    add: async (token, user_id) => {
      return await app.knex('sessions')
        .insert({ user_id: user_id, access_token: app.crypto.hash(token) })
    },

    verify: async (token) => {
      return await app.knex('sessions')
        .select('users.id', 'users.role', 'users.status')
        .innerJoin('users', (knex) => {
          knex.on('users.id', 'sessions.user_id').on('users.status', app.knex.raw('?', [true]))
        })
        .where({ access_token: app.crypto.hash(token), is_revoked: false })
        .first()
    }
  })
})