import React, { useState } from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import PostFeed from './components/PostFeed';
import Footer from './components/Footer';
import PostModal from './components/PostModal';
import AuthModal from './components/AuthModal';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm'


function App() {
  // State to control PostModal visibility
  const [showPostModal, setShowPostModal] = useState(false);

  // State to hold posts
  const [posts, setPosts] = useState([
    // Your initial posts data here
  ]);

  // **New states for authentication**
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate user logged in
  const [userData, setUserData] = useState({
    username: 'JohnDoe', // Replace with actual user data after authentication
    email: 'john.doe@example.com',
    bio: 'Just a regular user.',
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
      // Handle authentication flow
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

  // ... Authentication functions (handleLogin, handleLogout, etc.)

  return (
    <>
      <div className={styles.App}>
        <Header
          isLoggedIn={isLoggedIn}
          // ... other props
        />
        <Container className={styles.Main}>
          <Switch>
            <Route path="/" exact render={() => <h1>Home Page</h1>} />
            <Route path="/login" exact render={() => <SignInForm />} />
            <Route path="/signin" exact render={() => <h1>Account Created successfully</h1>} />
            <Route path="/loggedin" exact render={() => <h1>User Logged in successfully</h1>} />
            <Route path="/signup" exact render={() => <SignUpForm />} />
            <Route render={() => <>404: Page Not Found!</>} />
          </Switch>
        </Container>
        <WelcomeMessage onCreatePost={handleCreatePost} />
        <PostFeed
          posts={posts}
          setPosts={setPosts}
          handleEditPost={handleEditPost} // Pass the function to PostFeed
        />
        <Footer />

        {/* Render PostModal */}
        <PostModal
          show={showPostModal}
          onClose={handleClosePostModal}
          addPost={addPost}
          updatePost={updatePost}
          userData={userData}
          postToEdit={postToEdit} // Pass the post to edit
        />

        {/* Render AuthModal if needed */}
      </div>
    </>
  );
}

export default App;
