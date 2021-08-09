'use strict'

const fp = require('fastify-plugin')

const { resolve } = require('path')

const rule = require(resolve('src/app/rule/user'))

module.exports = fp(async (app) => {
  app.decorate('RuleUser', rule(app))
})