import React, { useState } from 'react'
import Modal from 'react-modal'
import { Document, Page } from 'react-pdf'
import AddQuoteModal from './AddQuoteModal'
import QuotesList from './QuotesList'

Modal.setAppElement('#root')

export default function BookViewModal({ book, modalOpen, setModalOpen, loadBooks }) {
  const { _id, name, author, lastPageRead, quotes, pdfUrl } = book
  const [modalAddQuoteOpen, setModalAddQuoteOpen] = useState(false)
  const [modalQuotesOpen, setModalQuotesOpen] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(lastPageRead > 0 ? lastPageRead : 1)

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
          <Page pageNumber={pageNumber} />
        </Document>
        <div className='pdf__controls'>
          <p>Page {pageNumber} / {numPages}</p>
          <button
            type='button'
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className='pdf__button'
          >
            Previous
        </button>
          <button
            type='button'
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className='pdf__button'
          >
            Next
        </button>
        </div>
      </div>
      <button onClick={() => setModalAddQuoteOpen(true)}>Add quote</button>
      <QuotesList
        quotes={quotes}
        setPageNumber={setPageNumber}
      />
      <AddQuoteModal
        bookId={_id}
        modalOpen={modalAddQuoteOpen}
        setModalOpen={setModalAddQuoteOpen}
        currentPage={pageNumber}
        loadBooks={loadBooks}
      />
    </Modal>
  )
}
