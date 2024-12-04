import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Post from './components/Post';
import Contact from './components/Contact';
import './assets/styles/main.css';

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'Мой первый пост',
      image: 'https://via.placeholder.com/300',
      content: 'Это я в самолете над Китаем ,но скоро буду в аэропорту'
    },
    {
      id: 2,
      title: 'Мой второй пост',
      image: 'https://via.placeholder.com/300',
      content: 'Это я в Корее уже не в самолете и не скоро мне быть в аэропорту'
    },
    {
      id: 3,
      title: 'Мой третий пост',
      image: 'https://via.placeholder.com/300',
      content: 'Это я в Монголии, после поезда а не самолета , еду покупать Тугрики'
    },
  ];

  const handlePostSelect = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="app">
      <Header />
      <Home posts={posts} onPostSelect={handlePostSelect} />
      <About />
      <Blog posts={posts} />
      {selectedPostId && <Post postId={selectedPostId} posts={posts} />}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;