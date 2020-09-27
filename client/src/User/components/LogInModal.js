import React, { useState } from 'react'
import Modal from 'react-modal'
import { logInUser } from '../services'

Modal.setAppElement('#root')

export default function LogIn({ modalOpen, setModalOpen, setUser, showError }) {
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
    e.preventDefault()
    closeModal()
    const response = await logInUser({ ...userInfo })
    if (response !== undefined && response.status === 200)
      setUser(response.data.user)
    else showError()
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
        <button onClick={closeModal} className='modal__close-button'>X</button>
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
          <button type='submit' className='form__button'>Log In</button>
        </div>
      </form>
    </Modal>
  )
}
