import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa'; // Example icon
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
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <FaHeart className="me-2 text-danger" />
            How Are You Really
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="primary" className="me-0" onClick={() => openModal('login')}>
                Login
              </Button>
              <Button variant="outline-primary" onClick={() => openModal('signup')}>
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Auth Modal */}
      {showModal && <AuthModal type={modalType} onClose={closeModal} />}
    </>
  );
}

export default Header;
