import React from 'react'

export default function BooksList({ books }) {
  return (
    <div className='books-list'>
      {
        books.map(({ _id, name, author, lastPageRead }) => (
          <div className='book' key={_id}>
            <div className='book__intro'>
              <img className='book__img' alt={`Book ${name}`} />
              <div className='book__info'>
                <h3>Author: {author}</h3>
                <h3>Last page read: {lastPageRead}</h3>
              </div>
            </div>
            <h1 className='book__name'>{name}</h1>
          </div>
        ))
      }
    </div>
  )
}
