const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema
const UserSchema = Schema({
  email: String,
  pasword: String,
  name: String,
  imgUrl: String
}, {
  timestamps: true
})

UserSchema.methods.setImgUrl = function (filename) {
  const { host, port } = appConfig
  if (process.env.NODE_ENV === 'production')
    this.imgUrl = `${host}/profiles/${filename}`
  else
    this.imgUrl = `${host}:${port}/profiles/${filename}`
}

module.exports = mongoose.model('Users', UserSchema)
