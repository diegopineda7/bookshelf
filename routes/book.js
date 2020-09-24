const express = require('express')
const { uploadPdf } = require('../libs/storage')
const { saveBook } = require('../controllers/bookController')

const api = express.Router()
api.post('/save', uploadPdf.single('pdf'), saveBook)

module.exports = api
