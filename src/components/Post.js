import React from 'react';

function Post({ post, deletePost }) {
  // The component returns JSX to render the post
  const displayAuthor = post.is_anonymous ? 'Anonymous' : post.author;
  // Handle delete button click
  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      deletePost(post.id);
    }
  };

  return (
    <div className="post-card">
      {/* Display the mood emoji */}
      <div className="post-mood">{post.mood}</div>
      
      {/* Display the content and metadata of the post */}
      <div className="post-content">
        <p>{post.content}</p>
        
        {/* Post metadata: author and timestamp */}
        <p className="post-meta">
          - {displayAuthor} &nbsp; | &nbsp; {post.created_at}
        </p>
        
        {/* Like button showing the number of likes */}
        <button className="like-button">❤️ {post.likes}</button>
        <button className="delete-button" onClick={handleDelete}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
