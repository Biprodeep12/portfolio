import React, { useEffect } from 'react';

export default function Cont() {
  useEffect(() => {
    const targetDiv = document.getElementById('hulle');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  });
  return (
    <>
      <section className='conti' id='hulle'>
        <div className='container-cont'>
          <h1>Contact Me</h1>
          <form action='https://formspree.io/f/xqakbqkk' method='post'>
            <label for='name'>Name:</label>
            <input name='name' id='name' type='text' required />
            <label for='email'>Email:</label>
            <input type='email' id='email' name='email' required />
            <label for='message'>Message:</label>
            <textarea id='message' name='message' required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
