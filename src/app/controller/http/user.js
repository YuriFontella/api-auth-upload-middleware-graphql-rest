'use strict'

module.exports = (app) => {

  const users = async () => {
    return await app.RuleUser.users()
  }

  return {
    users
  }
}