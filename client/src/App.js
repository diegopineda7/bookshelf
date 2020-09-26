import React, { useState } from 'react';
import './styles/book.css';
import './styles/global.css';
import './styles/user.css';
import Bookshelf from './User/components/Bookshelf';
import LogInModal from './User/components/LogInModal';
import SignUpModal from './User/components/SignUpModal';

function App() {
  const [user, setUser] = useState({})
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false)
  const [modalLogInOpen, setModalLogInOpen] = useState(false)

  return (
    <div className='App'>
      {
        !user.email
          ? <div className='App'>
            <button
              onClick={() => setModalSignUpOpen(true)}
              className='home__button'
            >
              SIGN UP
            </button>
            <button
              onClick={() => setModalLogInOpen(true)}
              className='home__button'
            >
              LOG IN
            </button>
            <SignUpModal
              modalOpen={modalSignUpOpen}
              setModalOpen={setModalSignUpOpen}
              setUser={setUser}
            />
            <LogInModal
              modalOpen={modalLogInOpen}
              setModalOpen={setModalLogInOpen}
              setUser={setUser}
            />
          </div>
          : <Bookshelf userEmail={user.email} />
      }
    </div>
  )
}

export default App;
