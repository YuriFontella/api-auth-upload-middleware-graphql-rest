'use strict'

const fp = require('fastify-plugin')

const { resolve } = require('path')

const mercurius = require('mercurius')

const { typeDefs, resolvers } = require(resolve('src/gql/merge'))

const { permissions } = require(resolve('src/gql/middleware/permissions'))

const { applyMiddleware } = require('graphql-middleware')

const { makeExecutableSchema } = require('@graphql-tools/schema')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const schemaWithMiddleware = applyMiddleware(schema, permissions)

module.exports = fp(async (app) => {
  app.register(mercurius, {
    schema: schemaWithMiddleware,
    graphiql: true
  })
}, { name: 'mercurius' })
