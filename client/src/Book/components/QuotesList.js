import React from 'react'

export default function QuotesList({ quotes, setPageNumber }) {
  return (
    <div className='quotes-list'>
      {
        quotes.map(({ quote, page }, index) => (
          <div key={index} onClick={() => setPageNumber(page)} className='quote'>
            <p>"{quote}"</p>
            <p>Page {page}</p>
          </div>
        ))
      }
    </div>
  )
}
