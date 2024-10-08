import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import AuthModal from './AuthModal';
import UserProfileModal from './UserProfileModal';

function Header() {
  // State variables for modal visibility and type
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState('login'); // 'login' or 'signup'

  // State for user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Simulated user data
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    bio: 'Just a regular user.',
  });

  // Function to open the AuthModal
  const openAuthModal = (type) => {
    setAuthModalType(type);
    setShowAuthModal(true);
  };

  // Function to close the AuthModal or switch forms
  const closeAuthModal = (type) => {
    if (type === 'login' || type === 'signup') {
      // Switch to the other form
      setAuthModalType(type);
    } else {
      // Close the modal
      setShowAuthModal(false);
    }
  };

  // Function to handle login (simulate login)
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    setShowAuthModal(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally, clear user data
  };

  // Function to update user data
  const updateUserData = (updatedUser) => {
    setUserData(updatedUser);
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
              {isLoggedIn ? (
                // User is logged in
                <NavDropdown
                  title={
                    <>
                      <FaUserCircle className="me-1" />
                      {userData.username}
                    </>
                  }
                  id="user-nav-dropdown"
                  align="end"
                >
                  <NavDropdown.Item onClick={() => setShowProfileModal(true)}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                // User is not logged in
                <>
                  <Button variant="primary" className="me-2" onClick={() => openAuthModal('login')}>
                    Login
                  </Button>
                  <Button variant="outline-primary" onClick={() => openAuthModal('signup')}>
                    Sign Up
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          type={authModalType}
          onClose={closeAuthModal}
          onLogin={handleLogin}
        />
      )}

      {/* User Profile Modal */}
      {showProfileModal && (
        <UserProfileModal
          show={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          userData={userData}
          updateUserData={updateUserData}
        />
      )}
    </>
  );
}

export default Header;
