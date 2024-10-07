import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function FooterModal({ type, onClose }) {
  // Function to get the content based on the modal type
  const getContent = () => {
    switch (type) {
      case 'about':
        return {
          title: 'About How Are You Really',
          body: (
            <p>
              "How Are You Really" is a platform dedicated to providing a safe and supportive space for individuals to share their true feelings and connect with others. We believe in the power of genuine expression and community support.
            </p>
          ),
        };
      case 'contact':
        return {
          title: 'Contact Us',
          body: (
            <>
              <p>
                If you have any questions, feedback, or need support, please reach out to us at:
              </p>
              <p>Email: support@howareyoureally.com</p>
            </>
          ),
        };
      case 'privacy':
        return {
          title: 'Privacy Policy',
          body: (
            <p>
              Your privacy is important to us. We are committed to protecting your personal information and ensuring your experience on our platform is safe and secure.
            </p>
          ),
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          body: (
            <p>
              By using "How Are You Really," you agree to abide by our community guidelines and terms of service.
            </p>
          ),
        };
      default:
        return {
          title: '',
          body: null,
        };
    }
  };

  const { title, body } = getContent();

  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FooterModal;
