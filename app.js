const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bookRoutes = require('./routes/book')
const userRoutes = require('./routes/user')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRoutes)
app.use('/book', bookRoutes)

app.use('/profiles', express.static(`${__dirname}/storage/pdf`))
app.use('/docs', express.static(`${__dirname}/storage/img`))

// TODO: set React app folder 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./frontend/build'))
}

module.exports = app
