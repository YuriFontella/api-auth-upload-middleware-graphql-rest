'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {
  app.register(require('mercurius-upload'))
}, { name: 'upload' })
