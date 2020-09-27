import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function QuotesListModal({ quotes, bookName, modalOpen, setModalOpen }) {
  const closeModal = () => setModalOpen(false)

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName='modal__overlay'
      className='modal__content'
    >
      <div className='modal__header'>
        <h1>"{bookName}" quotes</h1>
        <button onClick={closeModal} className='modal__close-button'>X</button>
      </div>
      <div className='quotes'>
        {
          quotes.map((quote, index) => <p key={index}>* {quote}</p>)
        }
      </div>
    </Modal>
  )
}
