const express = require('express')
const { uploadPdf } = require('../libs/storage')
const { saveBook, saveQuote } = require('../controllers/bookController')

const api = express.Router()
api.post('/save', uploadPdf.single('pdf'), saveBook)
api.post('/quote', uploadPdf.none(), saveQuote)

module.exports = api
