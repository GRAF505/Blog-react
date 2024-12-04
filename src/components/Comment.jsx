import React from 'react';


const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p className="comment__author">{comment.author}</p>
      <p className="comment__text">{comment.text}</p>
    </div>
  );
};

export default Comment;