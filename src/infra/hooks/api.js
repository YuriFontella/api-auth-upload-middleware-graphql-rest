'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {

  app.addHook('preHandler', async (request, reply) => {

    const token = request.headers['x-access-token']

    try {

      if (token) {

        const session = await app.knex('sessions')
          .select('users.id', 'users.role', 'users.status')
          .innerJoin('users', (knex) => {
            knex.on('users.id', 'sessions.user_id').on('users.status', app.knex.raw('?', [true]))
          })
          .where({ access_token: app.crypto.hash(token), is_revoked: false })
          .first()

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
})
