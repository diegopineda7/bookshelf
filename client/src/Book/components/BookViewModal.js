import React, { useState } from 'react'
import Modal from 'react-modal'
import { Document, Page } from 'react-pdf'
import AddQuoteModal from './AddQuoteModal'
import QuotesListModal from './QuotesListModal'

Modal.setAppElement('#root')

export default function BookViewModal({ book, modalOpen, setModalOpen, loadBooks }) {
  const [modalAddQuoteOpen, setModalAddQuoteOpen] = useState(false)
  const [modalQuotesOpen, setModalQuotesOpen] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const { _id, name, author, quotes, pdfUrl } = book

  const closeModal = () => setModalOpen(false)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const changePage = (offset) => setPageNumber(prevPageNumber => prevPageNumber + offset)

  const previousPage = () => changePage(-1)

  const nextPage = () => changePage(1)

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
      <div className='book__pdf'>
        <Document
          file={pdfUrl}
          options={{ workerSrc: 'pdf.worker.js' }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
          />
        </Document>
        <div className='book__controls'>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type='button'
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
        </button>
          <button
            type='button'
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
        </button>
        </div>
      </div>
      <button onClick={() => setModalAddQuoteOpen(true)}>Add quote</button>
      <QuotesListModal
        bookName={name}
        quotes={quotes}
        modalOpen={modalQuotesOpen}
        setModalOpen={setModalQuotesOpen}
      />
      <AddQuoteModal
        bookId={_id}
        modalOpen={modalAddQuoteOpen}
        setModalOpen={setModalAddQuoteOpen}
        loadBooks={loadBooks}
      />
    </Modal>
  )
}
