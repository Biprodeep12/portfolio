import React from 'react';

export default function About() {
  return (
    <div className='info' id='about'>
      <div className='int'>
        <div className='about-heading'>ABOUT ME</div>
        <div className='bio'>
          <div className='img-about'>
            <img src='pfop.jpeg' alt='pfp' />
          </div>
          <div className='info-about'>
            <p>
              Hi, I’m Biprodeep Bose from Kolkata, India. I’m a first-year
              student at the Calcutta Institute of Engineering and Management,
              where I’m pursuing a B.Tech in Computer Science and Engineering
              (CSE). I have a passion for coding, continuous learning, and
              building innovative technology. Currently, I’m aiming to secure
              internships that will allow me to apply my skills in real-world
              settings, gain hands-on experience, and connect with industry
              professionals. My long-term goal is to become a full-stack
              developer, mastering both front-end and back-end technologies to
              build efficient, user-centered applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
