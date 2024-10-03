import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PostFeed from './components/PostFeed';
import PostModal from './components/PostModal';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [showPostModal, setShowPostModal] = useState(false);

  const openPostModal = () => {
    setShowPostModal(true);
  };

  const closePostModal = () => {
    setShowPostModal(false);
  };

  return (
    <div>
      <Header />
      <main>
        <WelcomeMessage />

        <button className="create-post-button" onClick={openPostModal}>
          Create Post
        </button>
        <PostFeed />
      </main>
      {showPostModal && <PostModal onClose={closePostModal} />}
      <Footer />
    </div>
  );
}

export default App;
