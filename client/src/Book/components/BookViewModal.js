import React, { useState } from 'react'
import Modal from 'react-modal'
import AddQuoteModal from './AddQuoteModal'

Modal.setAppElement('#root')

export default function BookViewModal({ book, modalOpen, setModalOpen, loadBooks }) {
  const [modalQuoteOpen, setModalQuoteOpen] = useState(false)
  const { _id, name, author } = book

  const closeModal = () => setModalOpen(false)

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName='modal__overlay'
      className='modal__content'
    >
      <div className='modal__header'>
        <h1>{name}</h1>
        <h3>{author}</h3>
        <button onClick={closeModal} className='modal__close-button'>X</button>
      </div>
      <button onClick={() => setModalQuoteOpen(true)}>Add quote</button>
      <AddQuoteModal
        bookId={_id}
        modalOpen={modalQuoteOpen}
        setModalOpen={setModalQuoteOpen}
        loadBooks={loadBooks}
      />
    </Modal>
  )
}
