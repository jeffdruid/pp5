import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AuthModal({ type, onClose, onLogin }) {
  // State variables for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate authentication
    if (type === 'login') {
      // Simulate successful login
      const user = {
        username: 'JohnDoe',
        email,
        bio: 'Just a regular user.',
      };
      onLogin(user);
    } else {
      // Simulate successful signup and login
      const user = {
        username,
        email,
        bio: '',
      };
      onLogin(user);
    }
    // Close the modal
    onClose();
  };

  return (
    <Modal show onHide={() => onClose()} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {type === 'login' ? 'Login to Your Account' : 'Create a New Account'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Conditionally render fields based on 'type' */}
          {type === 'signup' && (
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
          )}
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          {type === 'signup' && (
            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
          )}
          <Button variant="primary" type="submit" className="mt-4" block>
            {type === 'login' ? 'Login' : 'Sign Up'}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {type === 'login' ? (
          <p className="mb-0">
            Don't have an account?{' '}
            <Button variant="link" onClick={() => onClose('signup')} className="p-0">
              Sign Up
            </Button>
          </p>
        ) : (
          <p className="mb-0">
            Already have an account?{' '}
            <Button variant="link" onClick={() => onClose('login')} className="p-0">
              Login
            </Button>
          </p>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default AuthModal;
