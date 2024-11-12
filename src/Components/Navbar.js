import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

  const location = useLocation();
  const navi = useNavigate();

  const Ab = () => {
    if (location.pathname === '/Cont' || '/Proj') {
      navi('/Main');
      const timer = setTimeout(() => {
        const targetDiv = document.getElementById('about');
        if (targetDiv) {
          targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
      return () => clearTimeout(timer);
    } else {
      window.location.href('#About');
    }
  };
  const sk = () => {
    if (location.pathname === '/Cont' || '/Proj') {
      navi('/Main');
      const timer = setTimeout(() => {
        const targetDiv = document.getElementById('skill');
        if (targetDiv) {
          targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
      return () => clearTimeout(timer);
    } else {
      window.location.href('#skill');
    }
  };
  return (
    <>
      <div>
        <nav className='Navbar'>
          <a className='NavLogo' href='/'>
            SKIBIDI
          </a>
          <div className='details'>
            <Link className='home' to='/' id='ani'>
              Home
              <div id='under'></div>
            </Link>
            <div onClick={Ab} className='about' id='ani'>
              About
              <div id='under'></div>
            </div>
            <div onClick={sk} className='skl' id='ani'>
              Skills
              <div id='under'></div>
            </div>
            <Link to='/Proj' className='proj' id='ani'>
              Projects
              <div id='under'></div>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
