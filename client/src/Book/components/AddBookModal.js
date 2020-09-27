import React, { useRef, useState } from 'react'
import Modal from 'react-modal'
import { saveBook } from '../services'

export default function AddBookModal({ modalOpen, setModalOpen, userEmail, loadBooks }) {
  const [bookInfo, setBookInfo] = useState({
    userEmail,
    name: '',
    author: ''
  })

  const inputFileRef = useRef()

  const closeModal = () => setModalOpen(false)

  const handleChange = e => {
    const { name, value } = e.target
    setBookInfo({ ...bookInfo, [name]: value })
  }

  const _saveBook = async e => {
    e.preventDefault();
    closeModal()
    await saveBook({ ...bookInfo, pdf: inputFileRef.current.files[0] })
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
        <h1>Add a new book</h1>
        <button onClick={closeModal} className='modal__close-button'>X</button>
      </div>
      <form onSubmit={_saveBook} className='modal__form'>
        <div className='form__item'>
          <label className='form__label'>Name *</label>
          <input
            type='text'
            name='name'
            value={bookInfo.name}
            onChange={handleChange}
            className='form__input'
            required
          />
        </div>
        <div className='form__item'>
          <label className='form__label'>Author *</label>
          <input
            type='text'
            name='author'
            value={bookInfo.author}
            onChange={handleChange}
            className='form__input'
            required
          />
        </div>
        <div className='form__item'>
          <label className='form__label'>PDF *</label>
          <input
            type='file'
            className='form__input'
            ref={inputFileRef}
            required
          />
        </div>
        <div className='form__item'>
          <button type='submit' className='form__button'>Add book</button>
        </div>
      </form>
    </Modal>
  )
}
