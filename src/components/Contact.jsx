import React, { useState } from 'react';
import Form from './Form';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Отправка данных на сервер
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact" id="contact">
      <h1>Контакты</h1>
      <p>Если у вас есть вопросы или предложения, свяжитесь со мной через форму ниже.</p>
      {status === 'success' && <p className="success-message">Сообщение отправлено!</p>}
      {status === 'error' && <p className="error-message">Ошибка при отправке сообщения.</p>}
      <Form 
        name={name}
        email={email}
        message={message}
        setName={setName}
        setEmail={setEmail}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};


export default Contact;

