'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {

  app.decorate('QueryUser', {
    users: async function users() {
      return await app.knex('users')
    }
  })
})