import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PostFeed from './components/PostFeed';


function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to How Are You Really</h2>
        <p>A discreet platform for sharing wellness stories.</p>
        <br />
        <h3>Recent Posts</h3>
        <PostFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
