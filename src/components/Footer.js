import React, { useState } from 'react';
import FooterModal from './FooterModal';

function Footer() {
  const [modalType, setModalType] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setModalType('');
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <span className="footer-link" onClick={() => openModal('about')}>
          About
        </span>
        |
        <span className="footer-link" onClick={() => openModal('contact')}>
          Contact
        </span>
        |
        <span className="footer-link" onClick={() => openModal('privacy')}>
          Privacy Policy
        </span>
        |
        <span className="footer-link" onClick={() => openModal('terms')}>
          Terms
        </span>
      </div>
      <p>&copy; 2023 How Are You Really</p>
      {showModal && <FooterModal type={modalType} onClose={closeModal} />}
    </footer>
  );
}

export default Footer;
