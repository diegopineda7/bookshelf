import React, { useState } from 'react'
import Modal from 'react-modal'
import AddQuoteModal from './AddQuoteModal'
import QuotesModal from './QuotesModal'

Modal.setAppElement('#root')

export default function BookViewModal({ book, modalOpen, setModalOpen, loadBooks }) {
  const [modalAddQuoteOpen, setModalAddQuoteOpen] = useState(false)
  const [modalQuotesOpen, setModalQuotesOpen] = useState(false)
  const { _id, name, author, quotes } = book

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
      <button onClick={() => setModalAddQuoteOpen(true)}>Add quote</button>
      <QuotesModal
        bookName={name}
        quotes={quotes}
        modalOpen={modalQuotesOpen}
        setModalOpen={setModalQuotesOpen}
      />
      <AddQuoteModal
        bookId={_id}
        modalOpen={modalAddQuoteOpen}
        setModalOpen={setModalQuoteOpen}
        loadBooks={loadBooks}
      />
    </Modal>
  )
}
