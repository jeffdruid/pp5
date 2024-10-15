import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import AuthModal from './AuthModal';
import UserProfileModal from './UserProfileModal';
import logo from '../assets/logo.webp';
import styles from '../styles/Header.module.css';
import {NavLink} from 'react-router-dom';

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
      <Navbar className={styles.Header} bg="light" expand="md" fixed="top">
        <Container>
          <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
          <Navbar.Brand>
            {/* <img src={logo} alt="How Are You Really" width="45" height="45" className="me-2" /> */}
            <FaHeart className="me-2 text-danger" />
            How Are You Really
            {/* <i className="fas fa-question ms-2"></i> */}
          </Navbar.Brand>
          </NavLink>
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
                  <NavLink className={styles.NavLink} activeClassName={styles.Active} exact to="/login"><i className="fas fa-sign-in-alt ms-1"></i> Login</NavLink>
                  <NavLink className={styles.NavLink} activeClassName={styles.Active} exact to="/signup"><i className="fas fa-user-plus ms-1"></i>Sign up</NavLink>
                  <Button variant="primary" className="me-2" onClick={() => openAuthModal('login')}>
                    Login
                    <i className="fas fa-sign-in-alt ms-1"></i>
                  </Button>
                  <Button variant="outline-primary" onClick={() => openAuthModal('signup')}>
                    Sign Up
                    <i className="fas fa-user-plus ms-1"></i>
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
