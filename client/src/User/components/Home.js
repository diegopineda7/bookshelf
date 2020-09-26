import React, { useEffect, useState } from 'react'
import Addbook from '../../Book/components/AddBook'
import { getUserBooks } from '../services'
import BooksList from './BooksList'

export default function Home({ userEmail }) {
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
    <div>
      <h1>Bookshelf</h1>
      {
        isLoading
          ? 'Loading...'
          : <>
            <button onClick={openModal} >Add book</button>
            <Addbook
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
            {
              books.length > 0
                ? <BooksList books={books} />
                : <h2>You don't have any books.</h2>
            }
          </>
      }
    </div>
  )
}
