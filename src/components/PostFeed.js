import React from 'react';
import Post from './Post';
import { Container } from 'react-bootstrap';

function PostFeed({ posts, setPosts, handleEditPost }) {
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
          // Pass the deletePost and handleEditPost functions to each Post component
          <Post
            key={post.id}
            post={post}
            deletePost={deletePost}
            handleEditPost={handleEditPost}
          />
        ))
      ) : (
        <p className="text-center">No posts available.</p>
      )}
    </Container>
  );
}

export default PostFeed;
