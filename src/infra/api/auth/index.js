'use strict'

const { resolve } = require('path')

const AuthController = require(resolve('src/app/controller/http/auth'))

module.exports = async (app) => {

  const controller = AuthController(app)

  app.post('/', controller.login)
}