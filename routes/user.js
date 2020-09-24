const express = require('express')
const upload = require('../libs/storage')
const { signUpUser, logInUser, getUserBooks } = require('../controllers/userController')

const api = express.Router()
api.post('/signup', upload.single('photo'), signUpUser)
api.get('/login', logInUser)
api.get('/books', getUserBooks)

module.exports = api
