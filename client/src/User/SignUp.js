import React, { useRef, useState } from 'react';

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: ''
  })

  const inputFileRef = useRef()

  const handleChange = e => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const signUpUser = e => {
    e.preventDefault();
    // TODO:
  }

  return (
    <div className='modal'>
      <div className='modal__header'>
        <h1>Sign Up form</h1>
        X
      </div>
      <form onSubmit={signUpUser} className='modal__form'>
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
    </div>
  )
}
