'use strict'

const { resolve } = require('path')

const UserController = require(resolve('src/app/controller/http/user'))

module.exports = async (app) => {

  const controller = UserController(app)

  app.get('/', { preHandler: [app.guard.role('admin')] }, controller.users)
}