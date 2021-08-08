'use strict'

const { resolve } = require('path')

const rule = require(resolve('src/app/rule/user'))

module.exports = {
  Query: {
    users: async (parent, args, { app }) => {
      return await rule.users(app.query)
    }
  }
}