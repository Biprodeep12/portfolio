import React from 'react';

export default function About() {
  return (
    <div className='info' id='about'>
      <div className='int'>
        <div className='about-heading'>ABOUT ME</div>
        <div className='bio'>
          <div className='img-about'>
            <img src='pfp.jpg' alt='pfp' />
          </div>
          <div className='info-about'>
            <p>
              Hi there! I'm the person who confidently walks into a room and
              forgets why I came in. People say I'm a 'jack of all trades,' but
              really, I'm more of a 'king of chaos.' I have a degree in
              procrastination with a minor in losing my keys, and my most
              marketable skill is knowing every wrong way to do things. Some
              people call it ‘trial and error’; I call it ‘embracing the
              adventure of almost failing.’ If you need someone to lighten the
              mood with a clever joke or accidentally set off a fire alarm just
              by existing—look no further, I’m your person! Proudly powered by
              caffeine and a questionable amount of optimism!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
