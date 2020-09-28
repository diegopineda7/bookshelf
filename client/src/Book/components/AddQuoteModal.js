import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { saveQuote } from '../services'

Modal.setAppElement('#root')

export default function AddQuoteModal({ modalOpen, setModalOpen, bookId, currentPage, loadBooks, setBook }) {
  const [quoteInfo, setQuoteInfo] = useState({
    bookId,
    quote: '',
    page: currentPage
  })

  useEffect(() => {
    setQuoteInfo({ ...quoteInfo, page: currentPage })
  }, [currentPage])

  const closeModal = () => {
    setModalOpen(false)
    setQuoteInfo({ ...quoteInfo, page: currentPage })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setQuoteInfo({ ...quoteInfo, [name]: value })
  }

  const _saveQuote = async e => {
    e.preventDefault()
    closeModal()
    const response = await saveQuote({ ...quoteInfo })
    setBook(response.data.bookUpdated)
    await loadBooks()
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName='modal__overlay'
      className='modal__content'
    >
      <div className='modal__header'>
        <h1>Add a new quote in this book</h1>
        <button onClick={closeModal} className='modal__close-button'>X</button>
      </div>
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
          <button type='submit' className='form__button'>Save quote</button>
        </div>
      </form>
    </Modal>
  )
}
