import React, { useState } from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import PostFeed from './components/PostFeed';
import Footer from './components/Footer';
import PostModal from './components/PostModal';
import AuthModal from './components/AuthModal'; // Import AuthModal
import './App.css';

function App() {
  // State to control PostModal visibility
  const [showPostModal, setShowPostModal] = useState(false);

  // State to control AuthModal visibility and type
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState('login'); // 'login' or 'signup'

  // State to hold posts
  const [posts, setPosts] = useState([
    // Your initial posts data here
  ]);

  // **New states for authentication**
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate user not logged in
  const [userData, setUserData] = useState({
    username: '', // Empty by default
    email: '',
    bio: '',
  });

  // State to track if user attempted to create a post before logging in
  const [pendingAction, setPendingAction] = useState(false);

  // Function to open PostModal
  const handleCreatePost = () => {
    if (isLoggedIn) {
      setShowPostModal(true);
    } else {
      // Open the AuthModal in 'login' mode
      setAuthModalType('login');
      setShowAuthModal(true);
      // Set pending action
      setPendingAction('createPost');
    }
  };

  // Function to close PostModal
  const handleClosePostModal = () => {
    setShowPostModal(false);
  };

  // Function to add a new post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Function to handle successful login
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    setShowAuthModal(false);

    // Check if there was a pending action
    if (pendingAction === 'createPost') {
      setShowPostModal(true);
      setPendingAction(null);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({
      username: '',
      email: '',
      bio: '',
    });
  };

  // Function to close AuthModal or switch forms
  const handleCloseAuthModal = (type) => {
    if (type === 'login' || type === 'signup') {
      // Switch to the other form
      setAuthModalType(type);
    } else {
      // Close the modal
      setShowAuthModal(false);
    }
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        userData={userData}
        openAuthModal={() => {
          setAuthModalType('login');
          setShowAuthModal(true);
        }}
      />
      <WelcomeMessage onCreatePost={handleCreatePost} />
      <PostFeed posts={posts} setPosts={setPosts} />
      <Footer />

      {/* Render PostModal */}
      <PostModal
        show={showPostModal}
        onClose={handleClosePostModal}
        addPost={addPost}
        userData={userData}
      />

      {/* Render AuthModal */}
      {showAuthModal && (
        <AuthModal
          type={authModalType}
          onClose={handleCloseAuthModal}
          onLogin={handleLogin}
        />
      )}
    </>
  );
}

export default App;
