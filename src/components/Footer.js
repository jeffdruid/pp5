import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
    <>
      <Navbar bg="light" variant="light" className="justify-content-center">
        <Nav>
          <Nav.Link href="#" onClick={() => openModal('about')}>
            About
          </Nav.Link>
          <Nav.Link href="#" onClick={() => openModal('contact')}>
            Contact
          </Nav.Link>
          <Nav.Link href="#" onClick={() => openModal('privacy')}>
            Privacy Policy
          </Nav.Link>
          <Nav.Link href="#" onClick={() => openModal('terms')}>
            Terms
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className="bg-light text-center py-2">
        <Container>
          <p className="mb-0">&copy; 2023 How Are You Really</p>
        </Container>
      </div>

      {/* Footer Modal */}
      {showModal && <FooterModal type={modalType} onClose={closeModal} />}
    </>
  );
}

export default Footer;
