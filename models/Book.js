const mongoose = require('mongoose')

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

module.exports = mongoose.model('Books', BookSchema)
