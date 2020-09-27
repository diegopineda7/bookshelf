import React, { useState } from 'react'
import Modal from 'react-modal'
import { saveQuote } from '../services'

export default function AddQuoteModal({ modalOpen, setModalOpen, bookId, loadBooks }) {
  const [quote, setQuote] = useState('')

  const closeModal = () => setModalOpen(false)

  const handleChange = e => setQuote(e.target.value)

  const _saveQuote = async e => {
    e.preventDefault()
    closeModal()
    await saveQuote({ bookId, quote })
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
            value={quote}
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
