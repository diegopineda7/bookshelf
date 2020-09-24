const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = Schema({
  email: String,
  pasword: String,
  name: String,
  imgUrl: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Users', UserSchema)
