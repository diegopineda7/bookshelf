const express = require('express')
const { uploadImg } = require('../libs/storage')
const { signUpUser, logInUser, getUserBooks } = require('../controllers/userController')

const api = express.Router()
api.post('/signup', uploadImg.single('photo'), signUpUser)
api.post('/login', uploadImg.none(), logInUser)
api.post('/books', uploadImg.none(), getUserBooks)

module.exports = api
