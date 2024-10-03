import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PostFeed from './components/PostFeed';
import PostModal from './components/PostModal';

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
        <h2>Welcome to How Are You Really</h2>
        <p>A discreet platform for sharing wellness stories.</p>
        <p>Share how you're really feeling, or read posts from others.</p>
        <p>Remember, you're not alone.</p>
        <br />
        
        <h3>Recent Posts</h3>

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
