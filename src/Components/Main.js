import React from 'react';
import Poster from './poster';
import About from './About';
import Skill from './Skill';

export default function Main() {
  return (
    <div className='content'>
      <Poster />
      <About />
      <Skill />
    </div>
  );
}
