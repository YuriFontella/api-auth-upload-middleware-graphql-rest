'use strict'

module.exports = (app) => {

  const users = async () => {
    return await app.QueryUser.users()
  }

  return {
    users
  }
}
