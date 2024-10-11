import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Відправка даних на сервер
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Вдало відправлено
      console.log('Форма успішно відправлена');
    } else {
      // Помилка під час відправки
      console.error('Помилка при відправці форми');
    }
  };

  const handleFormSubmission = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Відправляємо дані на сервер Formspree через AJAX
    fetch('https://formspree.io/f/xyyqbgjj', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Ваша форма успішно відправлена!');
        console.log(data);
        // Обробляємо відповідь від сервера Formspree
      })
      .catch((error) => {
        console.error('Помилка:', error);
        alert('Помилка при відправці форми. Будь ласка, спробуйте ще раз.');
      });

    return false; // Забороняємо подальше подію форми
  };

  return (
    <>
      <form
        // action='https://formspree.io/f/xzblvbwg'
        // method='POST'
        onSubmit={(e) => handleFormSubmission(e)}
      >
        <label>
          Your email:
          <input type='email' name='email' />
        </label>
        <label>
          Your message:
          <textarea name='message'></textarea>
        </label>

        <button type='submit'>Send</button>
      </form>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Імя:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Номер телефону:
            <input
              type='tel'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Повідомлення:
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type='submit'>Відправити</button>
      </form>
    </>
  );
};
