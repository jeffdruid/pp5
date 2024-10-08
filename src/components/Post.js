import React, { useState } from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { FaHeart, FaTrash, FaEdit, FaEllipsisV } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

function Post({ post, deletePost, handleEditPost }) {
  // State for managing likes
  const [likes, setLikes] = useState(post.likes);

  // Determine the display name for the author
  const displayAuthor = post.is_anonymous ? 'Anonymous' : post.author;

  // Handle delete button click
  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      deletePost(post.id);
    }
  };

  // Handle edit button click
  const handleEdit = () => {
    handleEditPost(post);
  };

  // Handle like button click
  const handleLike = () => {
    setLikes(likes + 1);
    // Optionally, update likes in the parent state or backend
  };

  // Format the timestamp
  const timeAgo = formatDistanceToNow(new Date(post.created_at), { addSuffix: true });

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          {/* Display the mood emoji and content */}
          <div>
            <Card.Title>
              {post.mood} {post.content}
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              - {displayAuthor} | {timeAgo}
            </Card.Subtitle>
          </div>
          {/* More options dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id={`dropdown-${post.id}`} size="sm">
              <FaEllipsisV />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleEdit}>
                <FaEdit className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item onClick={handleDelete}>
                <FaTrash className="me-2" /> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* Like button */}
        <div className="mt-2">
          <Button variant="outline-danger" onClick={handleLike}>
            <FaHeart /> {likes}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;
