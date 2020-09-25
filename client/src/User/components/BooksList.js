import React from 'react'

export default function BooksList({ books }) {
  return (
    <div className='books-list'>
      {
        books.map(({ _id, name, author, lastPageRead }) => (
          <div className='item-book' key={_id}>
            <h1>{name}</h1>
            <h3>Author: {author}</h3>
            <h3>Last page read: {lastPageRead}</h3>
          </div>
        ))
      }
    </div>
  )
}
