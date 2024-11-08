import React, { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const aniElements = document.querySelectorAll('#ani');

    aniElements.forEach((ani) => {
      const ur = ani.querySelector('#under');

      const hmouseover = () => {
        ur.classList.add('kalo');
      };

      const hmouseout = () => {
        ur.classList.remove('kalo');
        ur.classList.add('chola');

        const timer = setTimeout(() => {
          ur.classList.remove('chola');
        }, 600);

        return () => clearTimeout(timer);
      };

      ani.addEventListener('mouseover', hmouseover);
      ani.addEventListener('mouseleave', hmouseout);

      return () => {
        ani.removeEventListener('mouseover', hmouseover);
        ani.removeEventListener('mouseleave', hmouseout);
      };
    });
  }, []);

  return (
    <>
      <div>
        <nav className='Navbar'>
          <a className='NavLogo' href='/'>
            SKIBIDI
          </a>
          <div className='details'>
            <a className='home' href='#section1' id='ani'>
              Home
              <div id='under'></div>
            </a>
            <a href='#about' className='about' id='ani'>
              About
              <div id='under'></div>
            </a>
            <a href='#skill' className='skl' id='ani'>
              Skills
              <div id='under'></div>
            </a>
            <a href='/' className='proj' id='ani'>
              Projects
              <div id='under'></div>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
