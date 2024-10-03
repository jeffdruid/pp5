import React, { useState } from 'react';
import AuthModal from './AuthModal';

function Header() {
  // State variables for modal visibility and type
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('login'); // 'login' or 'signup'

  // Function to open the modal
  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  // Function to close the modal or switch forms
  const closeModal = (type) => {
    if (type === 'login' || type === 'signup') {
      // Switch to the other form
      setModalType(type);
    } else {
      // Close the modal
      setShowModal(false);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <h1>How Are You Really</h1>
        <div>
          <button onClick={() => openModal('login')}>Login</button>
          <button onClick={() => openModal('signup')}>Sign Up</button>
        </div>
      </nav>
      {showModal && <AuthModal type={modalType} onClose={closeModal} />}
    </header>
  );
}

export default Header;
