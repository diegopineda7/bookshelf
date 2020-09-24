const express = require('express')
const upload = require('../libs/storage')
const { saveBook } = require('../controllers/bookController')

const api = express.Router()
api.post('/save', upload.single('pdf'), saveBook)

module.exports = api
