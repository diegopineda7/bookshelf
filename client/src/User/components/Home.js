import React, { useEffect, useState } from 'react'
import { getUserBooks } from '../services'
import BooksList from './BooksList'

export default function Home({ userEmail }) {
  const [isLoading, setIsLoading] = useState(true)
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    const response = await getUserBooks({ userEmail })
    if (response !== undefined && response.status === 200) {
      setBooks(response.data.books)
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h1>Bookshelf</h1>
      {
        isLoading
          ? 'Loading...'
          : books.length > 0
            ? <BooksList />
            : <h2>You don't have any books.</h2>
      }
    // TODO: Add new book Modal
    </div>
  )
}
