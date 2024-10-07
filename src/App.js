import React, { useState } from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import PostFeed from './components/PostFeed';
import Footer from './components/Footer';
import PostModal from './components/PostModal';
// import app.css
import './App.css';

function App() {
  // State to control PostModal visibility
  const [showPostModal, setShowPostModal] = useState(false);

  // State to hold posts
  const [posts, setPosts] = useState([
    // Your initial posts data here
  ]);

  // Function to open PostModal
  const handleCreatePost = () => {
    setShowPostModal(true);
  };

  // Function to close PostModal
  const handleClosePostModal = () => {
    setShowPostModal(false);
  };

  // Function to add a new post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <Header />
      <WelcomeMessage onCreatePost={handleCreatePost} />
      <PostFeed posts={posts} setPosts={setPosts} />
      <Footer />

      {/* Render PostModal */}
      <PostModal show={showPostModal} onClose={handleClosePostModal} addPost={addPost} />
    </>
  );
}

export default App;
