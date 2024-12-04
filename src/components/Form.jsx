import React from 'react';


const Form = ({ name, email, message, setName, setEmail, setMessage, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="name">Имя:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="form__group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div className="form__group">
        <label htmlFor="message">Сообщение:</label>
        <textarea 
          id="message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className="form__button">Отправить</button>
    </form>
  );
};

export default Form;