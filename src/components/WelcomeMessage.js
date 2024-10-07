import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaRegSmileBeam } from 'react-icons/fa';

function WelcomeMessage({ onCreatePost }) {
  return (
    <div className="bg-light py-5">
      <Container className="text-center">
        <FaRegSmileBeam size={50} className="mb-3 text-primary" />
        <h2>Welcome to How Are You Really</h2>
        <p className="lead">
          Share how you're really feeling, or read posts from others.
        </p>
        <p>Remember, you're not alone.</p>
        <Button variant="primary" onClick={onCreatePost}>
          Share Your Feelings
        </Button>
      </Container>
    </div>
  );
}

export default WelcomeMessage;
