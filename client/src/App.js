import React, { useState } from 'react';
import './styles/user.css';
import Home from './User/components/Home';
import LogIn from './User/components/LogIn';
import SignUp from './User/components/SignUp';

function App() {
  const [user, setUser] = useState({})
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false)
  const [modalLogInOpen, setModalLogInOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalSignUpOpen(true)}>SIGN UP</button>
      <button onClick={() => setModalLogInOpen(true)}>LOG IN</button>
      <SignUp
        modalOpen={modalSignUpOpen}
        setModalOpen={setModalSignUpOpen}
        setUser={setUser}
      />
      <LogIn
        modalOpen={modalLogInOpen}
        setModalOpen={setModalLogInOpen}
        setUser={setUser}
      />
      {/* <Home userEmail={user.email} /> */}
      <Home userEmail='pineda.diego798@gmail.com' />
    </div>
  )
}

export default App;
