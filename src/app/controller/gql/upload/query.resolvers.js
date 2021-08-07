'use strict'

const { GraphQLUpload } = require('graphql-upload')

module.exports = {
  Upload: GraphQLUpload,

  Mutation: {
    upload: async (parent, { file }, context) => { }
  }
}