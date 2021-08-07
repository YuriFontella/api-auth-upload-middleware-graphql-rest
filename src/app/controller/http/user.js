'use strict'

module.exports = ({ query }) => {

  const users = async () => {
    return await query.users()
  }

  return {
    users
  }
}