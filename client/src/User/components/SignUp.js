import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { signUpUser } from '../services';

Modal.setAppElement('#root')

export default function SignUp({ modalOpen, setModalOpen, setUser }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: ''
  })

  const inputFileRef = useRef()

  const closeModal = () => setModalOpen(false)

  const handleChange = e => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const _signUpUser = e => {
    e.preventDefault();
    const user = signUpUser({ ...userInfo, photo: inputFileRef.current.files[0] })
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
        <h1>Sign Up form</h1>
        <button onClick={closeModal} className='modal__close-button'>X</button>
      </div>
      <form onSubmit={_signUpUser} className='modal__form'>
        <div className='form__item'>
          <label className='form__label'>Email *</label>
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
          <label className='form__label'>Password *</label>
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
          <label className='form__label'>Name *</label>
          <input
            type='text'
            name='name'
            value={userInfo.name}
            onChange={handleChange}
            className='form__input'
            required
          />
        </div>
        <div className='form__item'>
          <label className='form__label'>Photo</label>
          <input
            type='file'
            className='form__input'
            ref={inputFileRef}
          />
        </div>
        <div className='form__item'>
          <button type='submit' className='form__button'>Sign Up</button>
        </div>
      </form>
    </Modal>
  )
}
