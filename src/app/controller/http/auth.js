'use strict'

module.exports = (app) => {

  const login = async (request) => {
    return await app.RuleAuth.login(request.body.email, request.body.password)
  }

  return {
    login
  }
}