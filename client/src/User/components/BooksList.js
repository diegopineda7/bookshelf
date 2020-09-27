import React, { useState } from 'react'
import BookViewModal from '../../Book/components/BookViewModal'

export default function BooksList({ books, loadBooks }) {
  const [modalBookOpen, setModalBookOpen] = useState(false)
  const [bookOpen, setBookOpen] = useState({})

  const setBookActive = book => {
    setBookOpen(book)
    setModalBookOpen(true)
  }

  return (
    <div className='books-list'>
      {
        books.map(book => {
          const { _id, name, author, lastPageRead, quotes } = book
          return (
            <div className='book' key={_id}>
              <div className='book__intro'>
                <img className='book__img' alt={name} />
                <div className='book__info'>
                  <h3>Author: {author}</h3>
                  <h3>Last page read: {lastPageRead}</h3>
                  <h3>Quotes saved: {quotes.length}</h3>
                </div>
              </div>
              <h1 className='book__name'>{name}</h1>
              <button onClick={() => setBookActive(book)}>Read</button>
            </div>
          )
        })
      }
      <BookViewModal
        book={bookOpen}
        modalOpen={modalBookOpen}
        setModalOpen={setModalBookOpen}
        loadBooks={loadBooks}
      />
    </div>
  )
}
