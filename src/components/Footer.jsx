import React from 'react';
import { FaVk, FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Мой блог. Все права защищены Мною.</p>
      <div className="footer__social">
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
    </footer>
  );
};

export default Footer;