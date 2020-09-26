import React, { useEffect, useState } from 'react'
import AddbookModal from '../../Book/components/AddBookModal'
import { getUserBooks } from '../services'
import BooksList from './BooksList'

export default function Bookshelf({ userEmail }) {
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

  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <div className='bookshelf'>
      <h1>Bookshelf</h1>
      <button className='bookshelf__button'>LOG OUT</button>
      {
        isLoading
          ? <div className='loading'>
            <h2>Loading your books...</h2>
          </div>
          : <div className='bookslist'>
            <button onClick={openModal} className='bookshelf__button'>Add book</button>
            <AddbookModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              userEmail={userEmail}
              loadBooks={loadBooks}
            />
            {
              books.length > 0
                ? <BooksList books={books} />
                : <h2>You don't have any books.</h2>
            }
          </div>
      }
    </div>
  )
}
