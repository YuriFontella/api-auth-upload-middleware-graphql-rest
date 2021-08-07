'use strict'

module.exports = class {

  constructor(name, email, image, role, password, status, provider) {
    this.name = name
    this.email = email
    this.image = image
    this.role = role
    this.password = password
    this.status = status
    this.provider = provider
  }
}