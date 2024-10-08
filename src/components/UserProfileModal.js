import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UserProfileModal({ show, onClose, userData, updateUserData }) {
  // Local state to manage form inputs
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [bio, setBio] = useState(userData.bio);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Update user data
    const updatedUser = {
      ...userData,
      username,
      email,
      bio,
    };
    updateUserData(updatedUser);
    // Close the modal
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Username */}
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
          {/* Email */}
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
          {/* Bio */}
          <Form.Group controlId="formBio" className="mt-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tell us about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          {/* Save Button */}
          <Button variant="primary" type="submit" className="mt-4" block>
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default UserProfileModal;
