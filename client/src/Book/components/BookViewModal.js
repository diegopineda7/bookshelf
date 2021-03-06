import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { Document, Page } from 'react-pdf'
import AddQuoteForm from './AddQuoteForm'
import QuotesList from './QuotesList'

Modal.setAppElement('#root')

export default function BookViewModal({ book, modalOpen, setModalOpen, loadBooks, setLastPageRead }) {
  const [bookOpen, setBookOpen] = useState(book)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(null)
  const { _id, name, author, lastPageRead, quotes, pdfUrl } = bookOpen

  const closeModal = () => {
    setModalOpen(false)
    if (lastPageRead !== pageNumber)
      setLastPageRead(_id, pageNumber)
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(lastPageRead > 0 ? lastPageRead : 1)
  }

  const changePage = offset => setPageNumber(prevPageNumber => prevPageNumber + offset)

  const previousPage = () => changePage(-1)

  const nextPage = () => changePage(1)

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName='modal__overlay'
      className='modal__content modal__content--pdf'
    >
      <div className='modal__header'>
        <h1>{name}</h1>
        <h3>{author}</h3>
        <button onClick={closeModal} className='modal__close-button'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className='book__content'>
        <div className='book__pdf'>
          <Document
            file={pdfUrl}
            options={{ workerSrc: 'pdf.worker.js' }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              scale={1.6}
            />
          </Document>
          <div className='pdf__controls'>
            <p className='pdf__page'>Page {pageNumber} / {numPages}</p>
            <button
              type='button'
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className='pdf__button'
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              type='button'
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className='pdf__button'
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className='book__quotes-section'>
          {
            pageNumber &&
            <AddQuoteForm
              bookId={_id}
              currentPage={pageNumber}
              loadBooks={loadBooks}
              setBook={setBookOpen}
            />
          }
          <QuotesList
            quotes={quotes}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
    </Modal>
  )
}
