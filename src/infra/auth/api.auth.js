'use strict'

const fp = require('fastify-plugin')

const auth = require('fastify-auth')

module.exports = fp(async (app) => {
  app
    .decorate('applyPolicy', async (request, reply) => {
      const token = request.headers['x-access-token']

      try {

        if (token) {

          const session = await app.QuerySession.verify(token)

          if (session) {

            request.current_user = {
              id: session.id,
              status: session.status,
              role: [session.role]
            }
          }

          else reply.code(401).send('A sessão não foi encontrada')
        }

      } catch (e) {
        console.log(e)
      }

    })
    .register(auth)
})
