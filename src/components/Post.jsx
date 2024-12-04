import React, { useEffect, useState } from 'react';
import Comment from './Comment';


const Post = ({ postId, posts }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Находим пост по id
    const selectedPost = posts.find(p => p.id === postId);
    setPost(selectedPost);

    // Загрузка комментариев с сервера
    fetch(`https://api.example.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [postId, posts]);

  if (!post) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="post" id="post">
      <h1 className="post__title">{post.title}</h1>
      <img src={post.image} alt={post.title} className="post__image" />
      <p className="post__content">{post.content}</p>
      <h2 className="post__comments-title">Комментарии</h2>
      <div className="post__comments">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;