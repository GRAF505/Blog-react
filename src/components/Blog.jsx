import React from 'react';
import PostPreview from './PostPreview';
import post1Image from '../assets/images/slider_China.jpg';
import post2Image from '../assets/images/slider_Kor.jpg';
import post3Image from '../assets/images/slider_Mong.jpg';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Мой первый пост',
      image: post1Image,
      excerpt: 'Это мой первый пост о путешествиях.',
      content: 'Без разницы я уже дома'
    },
    {
      id: 2,
      title: 'Мой второй пост',
      image: post2Image,
      excerpt: 'Это мой второй пост о путешествиях.',
      content: 'Без разницы я уже дома'
    },
    {
      id: 3,
      title: 'Мой третий пост',
      image: post3Image,
      excerpt: 'Это мой третий пост о путешествиях.',
      content: 'Без разницы я уже дома'
    },
  ];

  return (
    <div className="blog" id="blog">
      <h1>Блог</h1>
      <div className="blog__posts">
        {posts.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;