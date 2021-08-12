'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {

  app.register(require('fastify-guard'), {
    errorHandler: (result, request, reply) => {
      return reply.code(401).send('Você não tem permissão para acessar essa rota')
    },

    requestProperty: 'current_user'
  })
})
