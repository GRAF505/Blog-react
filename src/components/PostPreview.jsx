import React, { useState } from 'react';

const PostPreview = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post-preview">
      <img src={post.image} alt={post.title} className="post-preview__image" />
      <h3 className="post-preview__title">{post.title}</h3>
      <p className="post-preview__content">{post.content}</p>
      <div className="post-preview__actions">
        <button onClick={handleLike} className="post-preview__button">
          👍 {likes}
        </button>
        <button onClick={handleDislike} className="post-preview__button">
          👎 {dislikes}
        </button>
      </div>
    </div>
  );
};

export default PostPreview;