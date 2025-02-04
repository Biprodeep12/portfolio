import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }) {
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

  const images = ['/align-justify-svgrepo-com.svg', '/cross.svg'];

  const [pod, dop] = useState(images[0]);

  const toggleStyle = () => {
    const imghd = document.getElementById('kall');
    const dw = document.getElementById('dwom');

    if (pod === images[0]) {
      imghd.style.width = '35px';
      imghd.style.height = '35px';
      dop(images[1]);
      dw.style.visibility = 'visible';
    } else {
      imghd.style.width = '70px';
      imghd.style.height = '70px';
      dop(images[0]);
      dw.style.visibility = 'hidden';
    }
  };

  return (
    <>
      <div>
        <nav className='Navbar'>
          <a className='NavLogo' href='/'>
            BIP.BOSE
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
          <div className='dropd' onClick={toggleStyle}>
            <img src={pod} id='kall' alt='icon' />
          </div>
          <div className='dwom' id='dwom'>
            <Link to='/' id='tion1'>
              Home
            </Link>
            <div onClick={Ab} id='tion1'>
              About
            </div>
            <div onClick={sk} id='tion1'>
              Skills
            </div>
            <Link to='/Proj' id='tion1'>
              Projects
            </Link>
            <Link to='/Cont' id='tion1'>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
