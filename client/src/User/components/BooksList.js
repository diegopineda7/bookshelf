import React, { useState } from 'react'
import BookViewModal from '../../Book/components/BookViewModal'
import { setLastPageRead } from '../../Book/services'

export default function BooksList({ books, loadBooks }) {
  const [modalBookOpen, setModalBookOpen] = useState(false)
  const [bookOpen, setBookOpen] = useState({})

  const setBookActive = book => {
    setBookOpen(book)
    setModalBookOpen(true)
  }

  const _setLastPageRead = async (bookId, page) => {
    await setLastPageRead({ bookId, page })
    loadBooks()
  }

  return (
    <div className='books-list'>
      {
        books.map(book => {
          const { _id, name, author, lastPageRead } = book
          return (
            <div className='book' key={_id}>
              <div className='book__intro'>
                <img className='book__img' alt={name} />
                <div className='book__info'>
                  <h3>Author: {author}</h3>
                  <h3>Last page read: {lastPageRead}</h3>
                </div>
              </div>
              <h1 className='book__name'>{name}</h1>
              <button onClick={() => setBookActive(book)}>Read</button>
            </div>
          )
        })
      }
      {
        bookOpen.name &&
        <BookViewModal
          book={bookOpen}
          modalOpen={modalBookOpen}
          setModalOpen={setModalBookOpen}
          loadBooks={loadBooks}
          setLastPageRead={_setLastPageRead}
        />
      }
    </div>
  )
}
