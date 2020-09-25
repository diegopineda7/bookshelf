import React, { useState } from 'react';
import './styles/user.css';
import SignUp from './User/components/SignUp';

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>OPEN MODAL</button>
      <SignUp
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  )
}

export default App;
