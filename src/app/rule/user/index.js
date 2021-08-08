'use strict'

module.exports = {

  users: async (query) => {
    return await query.users()
  }
}
