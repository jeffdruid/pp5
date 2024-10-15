import React, { useState, useContext } from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import AuthModal from './AuthModal';
import UserProfileModal from './UserProfileModal';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../App';
import styles from '../styles/Header.module.css';

function Header() {
  const currentUser = useContext(CurrentUserContext);  // Use currentUser from context

  const loggedInIcons = (
    <>
      <NavDropdown
        title={
          <>
            <FaUserCircle className="me-1" />
            {currentUser?.username}  {/* Display username from context */}
          </>
        }
        id="user-nav-dropdown"
        align="end"
      >
        <NavDropdown.Item>Profile</NavDropdown.Item>
        <NavDropdown.Item>Logout</NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} to="/login">
        <i className="fas fa-sign-in-alt ms-1"></i> Login
      </NavLink>
      <NavLink className={styles.NavLink} to="/signup">
        <i className="fas fa-user-plus ms-1"></i> Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.Header} bg="light" expand="md" fixed="top">
      <Container>
        <NavLink exact className={styles.NavLink} to="/">
          <Navbar.Brand>
            <FaHeart className="me-2 text-danger" />
            How Are You Really
          </Navbar.Brand>
        </NavLink>
        {currentUser ? loggedInIcons : loggedOutIcons}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink exact className={styles.NavLink} to="/">
              <i className="fas fa-home"></i> Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
