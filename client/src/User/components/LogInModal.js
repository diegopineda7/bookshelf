import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from 'react-modal'
import Loading from '../../Loading'
import { logInUser } from '../services'

Modal.setAppElement('#root')

export default function LogIn({ modalOpen, setModalOpen, setUser, showError }) {
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    email: 'pineda.diego798@gmail.com',
    password: 'diego7'
  })

  const closeModal = () => setModalOpen(false)

  const handleChange = e => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const _logInUser = async e => {
    setIsLoading(true)
    e.preventDefault()
    const response = await logInUser({ ...userInfo })
    if (response !== undefined && response.status === 200) {
      setUser(response.data.user)
      setIsLoading(false)
      closeModal()
    } else {
      setIsLoading(false)
      showError()
    }
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName='modal__overlay'
      className='modal__content'
    >
      <div className='modal__header'>
        <h1>Log In form</h1>
        <button onClick={closeModal} className='modal__close-button'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <form onSubmit={_logInUser} className='modal__form'>
        <div className='form__item'>
          <label className='form__label'>Email</label>
          <input
            type='email'
            name='email'
            value={userInfo.email}
            onChange={handleChange}
            className='form__input'
            required
          />
        </div>
        <div className='form__item'>
          <label className='form__label'>Password</label>
          <input
            type='password'
            name='password'
            value={userInfo.password}
            onChange={handleChange}
            className='form__input'
            required
          />
        </div>
        <div className='form__item'>
          <button
            type='submit'
            disabled={isLoading}
            className='form__button'
          >
            Log In
            {isLoading && <Loading />}
          </button>
        </div>
      </form>
    </Modal>
  )
}
