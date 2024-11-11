import React from 'react';

export default function Cont() {
  return (
    <>
      <section className='conti'>
        <div className='container-cont'>
          <h1>Contact Me</h1>
          <form action='https://formspree.io/f/{form_id}' method='post'>
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
