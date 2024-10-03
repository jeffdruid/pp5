import React from 'react';

function FooterModal({ type, onClose }) {
  // Function to get the content based on the modal type
  const getContent = () => {
    switch (type) {
      case 'about':
        return (
          <>
            <h2>About How Are You Really</h2>
            <p>
              "How Are You Really" is a platform dedicated to providing a safe and supportive space for individuals to share their true feelings and connect with others. We believe in the power of genuine expression and community support.
            </p>
          </>
        );
      case 'contact':
        return (
          <>
            <h2>Contact Us</h2>
            <p>
              If you have any questions, feedback, or need support, please reach out to us at:
            </p>
            <p>Email: support@howareyoureally.com</p>
          </>
        );
      case 'privacy':
        return (
          <>
            <h2>Privacy Policy</h2>
            <p>
              Your privacy is important to us. We are committed to protecting your personal information and ensuring your experience on our platform is safe and secure.
            </p>
          </>
        );
      case 'terms':
        return (
          <>
            <h2>Terms of Service</h2>
            <p>
              By using "How Are You Really," you agree to abide by our community guidelines and terms of service.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content footer-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {getContent()}
      </div>
    </div>
  );
}

export default FooterModal;
