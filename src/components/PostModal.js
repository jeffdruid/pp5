import React, { useState } from 'react';
import { Modal, Button, Form, ToggleButtonGroup, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { FaSmile, FaFrown, FaMeh, FaGrinStars, FaRegLightbulb } from 'react-icons/fa';

function PostModal({ show, onClose }) {
  // State variables for form inputs
  const [mood, setMood] = useState('');
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle post creation
    // For now, we'll just log the input values
    console.log('New Post:', { mood, content, isAnonymous });
    // Close the modal after submission
    onClose();
  };

  // Array of mood options with icons
  const moodOptions = [
    { label: 'Happy', emoji: <FaSmile />, value: 'happy' },
    { label: 'Sad', emoji: <FaFrown />, value: 'sad' },
    { label: 'Anxious', emoji: <FaMeh />, value: 'anxious' },
    { label: 'Excited', emoji: <FaGrinStars />, value: 'excited' },
    { label: 'Thoughtful', emoji: <FaRegLightbulb />, value: 'thoughtful' },
  ];
  
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Share How You're Really Feeling</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Mood Selection */}
          <Form.Group>
            <Form.Label>Mood</Form.Label>
            <ButtonGroup aria-label="Mood selection" className="mb-3 d-flex justify-content-between">
              {moodOptions.map((option) => (
                <ToggleButton
                  key={option.value}
                  id={`mood-${option.value}`}
                  type="radio"
                  variant="outline-primary"
                  name="mood"
                  value={option.value}
                  checked={mood === option.value}
                  onChange={(e) => setMood(e.currentTarget.value)}
                >
                  {option.emoji}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Form.Group>
          {/* Content Input */}
          <Form.Group controlId="formContent">
            <Form.Label>What's on your mind?</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </Form.Group>
          {/* Anonymous Option */}
          <Form.Group controlId="formAnonymous" className="mt-3">
            <Form.Check
              type="checkbox"
              label="Post Anonymously"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
          </Form.Group>
          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-4" block>
            Post
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default PostModal;
