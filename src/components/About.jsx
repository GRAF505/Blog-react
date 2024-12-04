import React from 'react';
import { FaVk, FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import avatar from '../assets/images/Me.jpg';


const About = () => {
  return (
    <div className="about" id="about">
      <h1>Обо мне</h1>
      <img src={avatar} alt="Фото автора" className="about__photo" />
      <p>Меня зовут Лёша, и я люблю путешествовать. В этом блоге я делюсь своими впечатлениями:Как я погулял, полетал,поездил!!.</p>
      <div className="about__social">
      <a href="https://vk.com/leshkanidze" target="_blank" rel="noopener noreferrer">
          <FaVk className="about__social-icon" />
        </a>
        <a href="https://t.me/aliiiinahryp" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="about__social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="about__social-icon" />
        </a>
      </div>
    </div>
  );
};

export default About;