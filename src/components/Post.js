import React from 'react';

function Post({ post }) {
  // The component returns JSX to render the post
  return (
    <div className="post-card">
      {/* Display the mood emoji */}
      <div className="post-mood">{post.mood}</div>
      
      {/* Display the content and metadata of the post */}
      <div className="post-content">
        <p>{post.content}</p>
        
        {/* Post metadata: author and timestamp */}
        <p className="post-meta">
          - {post.author} &nbsp; | &nbsp; {post.created_at}
        </p>
        
        {/* Like button showing the number of likes */}
        <button className="like-button">❤️ {post.likes}</button>
      </div>
    </div>
  );
}

export default Post;
