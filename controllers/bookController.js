const Book = require('../models/Book')

const getBooks = async (req, res) => {
  const books = await Book.find().lean().exec()
  res.status(200).send({ books })
}

const saveBook = async (req, res) => {
  try {
    const {
      userEmail,
      name,
      author,
      lastPageRead
    } = req.body

    const book = Book({
      userEmail,
      name,
      author,
      lastPageRead
    })
    // const { filename } = req.file
    // book.setPdfUrl(filename)

    const bookSaved = await book.save()

    res.status(201).send({ bookSaved })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

module.exports = {
  getBooks,
  saveBook
}
