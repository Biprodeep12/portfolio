import React from 'react';

export default function Skill() {
  return (
    <div className='skill' id='skill'>
      <div className='intSk'>
        <div className='skill-heading'>SKILLS</div>
        <div className='sks'>
          <div className='tech'>
            <img src='html.svg' alt='html' />
          </div>
          <div className='tech'>
            <img src='css.svg' alt='css' />
          </div>
          <div className='tech'>
            <img src='javascript.svg' alt='javascript' />
          </div>
          <div className='tech'>
            <img src='react.svg' alt='react js' />
          </div>
          <div className='tech'>
            <img src='python.svg' alt='python' />
          </div>
          <div className='tech'>
            <img src='mysql.svg' alt='maysql' />
          </div>
        </div>
      </div>
    </div>
  );
}
