import React, { useState } from 'react';
import './styles/user.css';
import Home from './User/components/Home';
import SignUp from './User/components/SignUp';

function App() {
  const [user, setUser] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>OPEN MODAL</button>
      <SignUp
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setUser={setUser}
      />
      {/* <Home userEmail={user.email} /> */}
      <Home userEmail='pineda.diego798@gmail.com' />
    </div>
  )
}

export default App;
