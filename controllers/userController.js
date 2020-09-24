const Book = require('../models/Book')
const User = require('../models/User')

const getUserBooks = async (req, res) => {
  const { userEmail } = req.body
  const userBooks = await Book.find({ userEmail }).lean().exec()
  res.status(200).send({ userBooks })
}

const logInUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email, password }).lean().exec()
  res.status(200).send({ user })
}

const signUpUser = async (req, res) => {
  try {
    const {
      email,
      password,
      name
    } = req.body

    const user = User({
      email,
      password,
      name
    })

    if (req.file) {
      const { filename } = req.file
      user.setImgUrl(filename)
    }

    const newUser = await user.save()

    res.status(201).send({ newUser })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

module.exports = {
  getUserBooks,
  logInUser,
  signUpUser
}
