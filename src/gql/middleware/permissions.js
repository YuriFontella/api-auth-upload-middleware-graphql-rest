'use strict'

const { shield, and, or, not } = require('graphql-shield')

const { isAdmin } = require('./rules')

const permissions = shield({
  Query: {}
})

module.exports = { permissions }
