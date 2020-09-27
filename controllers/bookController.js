const Book = require('../models/Book')

const saveBook = async (req, res) => {
  try {
    const {
      userEmail,
      name,
      author
    } = req.body

    const book = Book({
      userEmail,
      name,
      author,
      lastPageRead: 0,
      quotes: []
    })

    const { filename } = req.file
    book.setPdfUrl(filename)

    const bookSaved = await book.save()

    res.status(201).send({ bookSaved })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const saveQuote = async (req, res) => {
  try {
    const {
      bookId,
      quote
    } = req.body

    const bookUpdated = await Book.findByIdAndUpdate(bookId, {
      $push: {
        quotes: quote
      }
    }, {
      new: true
    }).lean().exec()

    res.status(201).send({ bookUpdated })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

module.exports = {
  saveBook,
  saveQuote
}
