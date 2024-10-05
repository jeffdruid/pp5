import React, { useState } from 'react';

function AuthModal({ type, onClose }) {
  // State variables for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle authentication
    // For now, we log the input values
    console.log('Form submitted:', { username, email, password, confirmPassword });
  };

  // JSX to render the modal
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{type === 'login' ? 'Login to Your Account' : 'Create a New Account'}</h2>
        <form onSubmit={handleSubmit}>
          {/* Conditionally render fields based on 'type' */}
          {type === 'signup' && (
            <>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {type === 'signup' && (
            <>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </>
          )}
          <button type="submit">{type === 'login' ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {type === 'login' ? (
            <>
              Don't have an account?{' '}
              <span className="link" onClick={() => onClose('signup')}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className="link" onClick={() => onClose('login')}>
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
