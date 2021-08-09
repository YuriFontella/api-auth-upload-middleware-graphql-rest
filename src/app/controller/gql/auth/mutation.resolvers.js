'use strict'

module.exports = {
  Mutation: {
    login: async (parent, { email, password }, { app }) => {
      return await app.RuleAuth.login(email, password)
    }
  }
}
