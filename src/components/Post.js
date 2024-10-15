import React, { useState } from 'react';
import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import PostFeed from './PostFeed';
import Footer from './Footer';
import PostModal from './PostModal';
import AuthModal from './AuthModal';
import '../App.css';

function App() {
  // State to control PostModal visibility
  const [showPostModal, setShowPostModal] = useState(false);

  // State to control AuthModal visibility and type
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState('login'); // 'login' or 'signup'

  // State to hold posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alice',
      content: 'Feeling great today!',
      mood: 'happy',
      created_at: '2024-04-25T10:30:00Z',
      likes: 2,
      is_anonymous: false,
      comments: [
        {
          id: 1,
          author: 'Bob',
          content: 'Glad to hear that!',
          created_at: '2024-04-25T11:00:00Z',
        },
      ],
    },
    {
      id: 2,
      author: 'Anonymous',
      content: 'Having a tough day...',
      mood: 'sad',
      created_at: '2024-04-24T09:15:00Z',
      likes: 1,
      is_anonymous: true,
      comments: [],
    },
    // Add more initial posts as needed
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

  // **New state for editing posts**
  const [postToEdit, setPostToEdit] = useState(null);

  // Function to open PostModal for creating a post
  const handleCreatePost = () => {
    if (isLoggedIn) {
      setPostToEdit(null); // Ensure no post is being edited
      setShowPostModal(true);
    } else {
      // Open the AuthModal in 'login' mode
      setAuthModalType('login');
      setShowAuthModal(true);
      // Set pending action
      setPendingAction('createPost');
    }
  };

  // Function to open PostModal for editing a post
  const handleEditPost = (post) => {
    setPostToEdit(post);
    setShowPostModal(true);
  };

  // Function to close PostModal
  const handleClosePostModal = () => {
    setShowPostModal(false);
    setPostToEdit(null);
  };

  // Function to add a new post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Function to update an existing post
  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
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
      setPendingAction(null); // Reset pending action
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
      <PostFeed
        posts={posts}
        setPosts={setPosts}
        handleEditPost={handleEditPost}
        isLoggedIn={isLoggedIn}
        userData={userData}
      />
      <Footer />

      {/* Render PostModal */}
      <PostModal
        show={showPostModal}
        onClose={handleClosePostModal}
        addPost={addPost}
        updatePost={updatePost}
        userData={userData}
        postToEdit={postToEdit}
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
