const mongoose = require('mongoose')

const connectDB = async ({ user, password, name }) => {
  const uri = `mongodb+srv://${user}:${password}@cluster0.jwttz.mongodb.net/${name}?retryWrites=true&w=majority`
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

mongoose.connection.on('open', () => console.log(`DB ${process.env.DB_NAME} connected`))

module.exports = connectDB
