import React from 'react';
import Slider from './Slider';
import PostPreview from './PostPreview';
import post1Image from '../assets/images/slider_China.jpg';
import post2Image from '../assets/images/slider_Kor.jpg';
import post3Image from '../assets/images/slider_Mong.jpg';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Мой первый пост',
      image: post1Image,
      content: 'Это я в самолете над Китаем ,но скоро буду в аэропорту'
    },
    {
      id: 2,
      title: 'Мой второй пост',
      image: post2Image,
      content: 'Это я в Корее уже не в самолете и не скоро мне быть в аэропорту'
    },
    {
      id: 3,
      title: 'Мой третий пост',
      image: post3Image,
      content: 'Это я в Монголии, после поезда а не самолета , еду покупать Тугрики'
    },
  ];

  return (
    <div className="home" id="home">
      <h1>Добро пожаловать в мой блог!</h1>
      <p>Здесь я делюсь своими впечатлениями о путешествиях.</p>
      <Slider />
      <h2>Последние посты</h2>
      <div className="home__posts">
        {posts.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;