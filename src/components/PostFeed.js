import React from 'react';
import Post from './Post';

function PostFeed() {
  // data for testing
  const posts = [
    {
      id: 1,
      author: 'Alex',
      content: "I've been feeling a bit overwhelmed lately.",
      mood: '😟',
      created_at: '10 minutes ago',
      likes: 5,
      is_anonymous: true,
    },
    {
      id: 2,
      author: 'Alex',
      content: "Today was a good day! I achieved my goals.",
      mood: '😊',
      created_at: '1 hour ago',
      likes: 10,
      is_anonymous: false,
    },
    {
      id: 3,
      author: 'Jane',
      content: 'Feeling grateful for the little things in life.',
      mood: '😊',
      created_at: '2 hours ago',
      likes: 7,
      is_anonymous: false,
    },
    {
      id: 4,
      author: 'John',
      content: 'Feeling lost...',
      mood: '😢',
      created_at: '3 hours ago',
      likes: 3,
      is_anonymous: true,
    },
  ];

  return (
    <div className="post-feed">
      {posts.map((post) => (
        // Map through the posts array and render a Post component for each post
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostFeed;
