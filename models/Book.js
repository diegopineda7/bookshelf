const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema
const BookSchema = Schema({
  userEmail: String,
  name: String,
  author: String,
  pdfUrl: String,
  lastPageRead: Number
}, {
  timestamps: true
})

UserSchema.methods.setPdfUrl = function (filename) {
  const { host, port } = appConfig
  if (process.env.NODE_ENV === 'production')
    this.pdfUrl = `${host}/docs/${filename}`
  else
    this.pdfUrl = `${host}:${port}/docs/${filename}`
}

module.exports = mongoose.model('Books', BookSchema)
