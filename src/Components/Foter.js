import React from 'react';

export default function Foter() {
  return (
    <div className='foot'>
      <div className='intfoot'>
        <div className='fhead'>SKIBIDI</div>
        <div className='fsoc'>
          <a href='/'>
            <img src='icons8-facebook.svg' id='alt1' alt='1' />
          </a>
          <a href='/'>
            <img src='icons8-github.svg' id='alt2' alt='2' />
          </a>
          <a href='/'>
            <img src='icons8-instagram.svg' id='alt3' alt='3' />
          </a>
          <a href='/'>
            <img src='icons8-linkedin (1).svg' id='alt4' alt='4' />
          </a>
          <a href='/'>
            <img src='icons8-youtube-logo.svg' id='alt5' alt='5' />
          </a>
        </div>
        <div className='fcom'>
          <a href='/'>Home</a>
          <p>|</p>
          <a href='/'>Projects</a>
          <p>|</p>
          <a href='/'>Contact</a>
        </div>
        <footer>COPYRIGHT © 2024 BIPRODEEP BOSE</footer>
      </div>
    </div>
  );
}
