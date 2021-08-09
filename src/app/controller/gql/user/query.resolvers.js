'use strict'

module.exports = {
  Query: {
    users: async (parent, args, { app }) => {
      return await app.RuleUser.users()
    }
  }
}