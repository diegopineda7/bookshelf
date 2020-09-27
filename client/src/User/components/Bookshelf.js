import React, { useEffect, useState } from 'react'
import AddBookModal from '../../Book/components/AddBookModal'
import { getUserBooks } from '../services'
import BooksList from './BooksList'

export default function Bookshelf({ userEmail, logOut }) {
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    const response = await getUserBooks({ userEmail })
    if (response !== undefined && response.status === 200) {
      setBooks(response.data.userBooks)
      setIsLoading(false)
    }
  }

  return (
    <div className='bookshelf'>
      <h1>Bookshelf</h1>
      <button
        onClick={logOut}
        className='bookshelf__button'
      >
        LOG OUT
        </button>
      {
        isLoading
          ? <div className='loading'>
            <h2>Loading your books...</h2>
          </div>
          : <div className='bookslist'>
            <button
              onClick={() => setModalOpen(true)}
              className='bookslist__button'
            >
              Add book
            </button>
            <AddBookModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              userEmail={userEmail}
              loadBooks={loadBooks}
            />
            {
              !books.length
                ? <h2>You don't have any books yet. Click the button to add your first book.</h2>
                : <BooksList
                  books={books}
                  loadBooks={loadBooks}
                />
            }
          </div>
      }
    </div>
  )
}
