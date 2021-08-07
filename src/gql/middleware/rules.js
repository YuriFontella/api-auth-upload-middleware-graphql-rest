'use strict'

const { rule } = require('graphql-shield')

exports.isAdmin = rule({ cache: 'contextual' })(
  async (parent, args, context, info) => {
    return context.current_user.role === 'admin' ? true : "Você não é um administrador"
  }
)
