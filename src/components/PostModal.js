import React, { useState } from 'react';

function PostModal({ onClose }) {
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
  };

  // Array of mood options
  const moodOptions = [
    { label: 'Happy', emoji: '😊' },
    { label: 'Sad', emoji: '😢' },
    { label: 'Anxious', emoji: '😟' },
    { label: 'Excited', emoji: '😃' },
    { label: 'Thoughtful', emoji: '🤔' },
  ];

  // JSX to render the modal
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Share How You're Really Feeling</h2>
        <form onSubmit={handleSubmit}>
          <label>Mood:</label>
          <div className="mood-selection">
            {moodOptions.map((option) => (
              <button
                type="button"
                key={option.label}
                className={`mood-button ${mood === option.emoji ? 'selected' : ''}`}
                onClick={() => setMood(option.emoji)}
              >
                {option.emoji}
              </button>
            ))}
          </div>
          <label htmlFor="content">What's on your mind?</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            required
          ></textarea>
          <div className="anonymous-option">
            <input
              type="checkbox"
              id="isAnonymous"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
            <label htmlFor="isAnonymous">Post Anonymously</label>
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default PostModal;
