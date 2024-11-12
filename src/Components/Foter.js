import React from 'react';
import { Link } from 'react-router-dom';

export default function Foter() {
  return (
    <div className='foot'>
      <div className='intfoot'>
        <div className='fhead'>SKIBIDI</div>
        <div className='fsoc'>
          <a href='/'>
            <img src='icons8-facebook.svg' id='alt1' alt='1' />
          </a>
          <a href='https://github.com/Biprodeep12'>
            <img src='icons8-github.svg' id='alt2' alt='2' />
          </a>
          <a href='https://www.instagram.com/bosebd/'>
            <img src='icons8-instagram.svg' id='alt3' alt='3' />
          </a>
          <a href='https://www.linkedin.com/in/biprodeep-bose-3b47862ba/'>
            <img src='icons8-linkedin (1).svg' id='alt4' alt='4' />
          </a>
          <a href='/'>
            <img src='icons8-youtube-logo.svg' id='alt5' alt='5' />
          </a>
        </div>
        <div className='fcom'>
          <Link to='/'>Home</Link>
          <p>|</p>
          <Link to='/Proj'>Projects</Link>
          <p>|</p>
          <Link to='/Cont'>Contact</Link>
        </div>
        <footer>COPYRIGHT © 2024 BIPRODEEP BOSE</footer>
      </div>
    </div>
  );
}
