'use strict'

const fp = require('fastify-plugin')

const { resolve } = require('path')

const rule = require(resolve('src/app/rule/auth'))

module.exports = fp(async (app) => {
  app.decorate('RuleAuth', rule(app))
})