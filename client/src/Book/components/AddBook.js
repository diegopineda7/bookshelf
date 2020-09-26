import React, { useRef, useState } from 'react'
import Modal from 'react-modal'
import { saveBook } from '../services'

export default function AddBook({ modalOpen, setModalOpen, setUser }) {
  const [bookInfo, setBookInfo] = useState({
    name: '',
    author: ''
  })

  const inputFileRef = useRef()

  const closeModal = () => setModalOpen(false)

  const handleChange = e => {
    const { name, value } = e.target
    setBookInfo({ ...bookInfo, [name]: value })
  }

  const _saveBook = e => {
    e.preventDefault();
    const user = saveBook({ ...bookInfo, pdf: inputFileRef.current.files[0] })
    setUser(user)
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
            type='name'
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
            type='author'
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
