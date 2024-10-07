import React, { useState } from 'react';
import Post from './Post';
import { Container } from 'react-bootstrap';

function PostFeed() {
  // Move posts data into state
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alex',
      content: "I've been feeling a bit overwhelmed lately.",
      mood: '😟',
      created_at: new Date(),
      likes: 5,
      is_anonymous: true,
    },
    {
      id: 2,
      author: 'Alex',
      content: 'Today was a good day! I achieved my goals.',
      mood: '😊',
      created_at: new Date(),
      likes: 10,
      is_anonymous: false,
    },
    {
      id: 3,
      author: 'Jane',
      content: 'Feeling grateful for the little things in life.',
      mood: '😊',
      created_at: new Date(),
      likes: 7,
      is_anonymous: false,
    },
    {
      id: 4,
      author: 'John',
      content: 'Feeling lost...',
      mood: '😢',
      created_at: new Date(),
      likes: 3,
      is_anonymous: true,
    },
  ]);

  // Function to delete a post by id
  const deletePost = (id) => {
    // Filter out the post with the given id
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <Container className="my-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          // Pass the deletePost function to each Post component
          <Post key={post.id} post={post} deletePost={deletePost} />
        ))
      ) : (
        <p className="text-center">No posts available.</p>
      )}
    </Container>
  );
}

export default PostFeed;
