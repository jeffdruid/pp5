import React from 'react';
import Post from './Post';

function PostFeed() {
  // data for testing
  const posts = [
    {
      id: 1,
      author: 'Anonymous',
      content: "I've been feeling a bit overwhelmed lately.",
      mood: '😟',
      created_at: '10 minutes ago',
      likes: 5,
    },
    {
      id: 2,
      author: 'Alex',
      content: "Today was a good day! I achieved my goals.",
      mood: '😊',
      created_at: '1 hour ago',
      likes: 10,
    },
  ];

  return (
    <div className="post-feed">
      {posts.map((post) => (
        // map through the posts array and render a Post component for each post
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostFeed;
