import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        Мой блог
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#blog">Блог</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;