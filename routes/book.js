const express = require('express')
const { uploadPdf } = require('../libs/storage')
const { saveBook, saveQuote, setLastPageRead } = require('../controllers/bookController')

const api = express.Router()
api.post('/save', uploadPdf.single('pdf'), saveBook)
api.post('/quote', uploadPdf.none(), saveQuote)
api.post('/lastpageread', uploadPdf.none(), setLastPageRead)

module.exports = api
