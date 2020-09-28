import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import Modal from 'react-modal'
import Loading from '../../Loading'
import { saveBook } from '../services'

Modal.setAppElement('#root')

export default function AddBookModal({ modalOpen, setModalOpen, userEmail, loadBooks }) {
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)
    e.preventDefault()
    await saveBook({ ...bookInfo, pdf: inputFileRef.current.files[0] })
    await loadBooks()
    setIsLoading(false)
    closeModal()
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
        <button onClick={closeModal} className='modal__close-button'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
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
          <button type='submit' className='form__button'>
            Add book
            {isLoading && <Loading />}
          </button>
        </div>
      </form>
    </Modal>
  )
}
