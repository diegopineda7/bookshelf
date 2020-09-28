import React, { useEffect, useState } from 'react'
import Loading from '../../Loading'
import { saveQuote } from '../services'

export default function AddQuoteForm({ bookId, currentPage, loadBooks, setBook }) {
  const [isLoading, setIsLoading] = useState(false)
  const [quoteInfo, setQuoteInfo] = useState({
    bookId,
    quote: '',
    page: currentPage
  })

  useEffect(() => {
    setQuoteInfo({ ...quoteInfo, page: currentPage })
  }, [currentPage])

  const handleChange = async e => {
    const { name, value } = e.target
    await setQuoteInfo({ ...quoteInfo, [name]: value })
  }

  const _saveQuote = async e => {
    setIsLoading(true)
    e.preventDefault()
    const response = await saveQuote({ ...quoteInfo })
    setBook(response.data.bookUpdated)
    setIsLoading(false)
    await loadBooks()
  }

  return (
    <form onSubmit={_saveQuote} className='modal__form'>
      <div className='form__item'>
        <label className='form__label'>Quote *</label>
        <input
          type='text'
          name='quote'
          value={quoteInfo.quote}
          onChange={handleChange}
          className='form__input'
          required
        />
      </div>
      <div className='form__item'>
        <label className='form__label'>Page *</label>
        <input
          type='number'
          name='page'
          value={quoteInfo.page}
          onChange={handleChange}
          className='form__input'
          required
        />
      </div>
      <div className='form__item'>
        <button
          type='submit'
          disabled={isLoading}
          className='form__button'
        >
          Save quote
          {isLoading && <Loading />}
        </button>
      </div>
    </form>
  )
}
