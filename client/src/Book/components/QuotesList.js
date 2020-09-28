import Tippy from '@tippyjs/react'
import React from 'react'
import 'tippy.js/dist/tippy.css'

export default function QuotesList({ quotes, setPageNumber }) {
  return (
    <div className='quotes-list'>
      <h3>Quotes</h3>
      {
        !quotes.length
          ? <p>No quotes saved</p>
          : quotes.map(({ quote, page }, index) => (
            <div
              onClick={() => setPageNumber(page)}
              key={index}
              className='quote'
            >
              <Tippy
                content={`Go to page ${page}`}
                placement='left'
              >
                <p>"{quote}" - Page {page}</p>
              </Tippy>
            </div>
          ))
      }
    </div>
  )
}
