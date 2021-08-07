'use strict'

const fp = require('fastify-plugin')

const query = async (app) => {

  app.decorate('query', {
    users: users
  })

  async function users() {
    return await app.knex('users')
  }
}

module.exports = fp(async (app) => {
  app.register(fp(query))
})