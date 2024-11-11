import React, { useEffect } from 'react';
import Poster from './poster';
import About from './About';
import Skill from './Skill';

export default function Main() {
  useEffect(() => {
    const targetDiv = document.getElementById('lluh');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  });
  return (
    <div className='content' id='lluh'>
      <Poster />
      <About />
      <Skill />
    </div>
  );
}
