import React, { useState, useEffect } from 'react';

export default function Poster() {
  const images = [
    '/weatherjsproj.png',
    'https://imgs.search.brave.com/PAX7Lyn2nT4rSw-HjucB8lgYdJz7CuXjcPcaRPNvG6I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/MTU3MTUyNi9waG90/by93YWxscGFwZXIt/YWJzdHJhY3Qtc2hh/cGVzLXN0b2NrLWlt/YWdlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0xUzBSNzB0/TWYyWjJiYzRXcVVG/UGM1RGVsZWpKZnh5/WjVodEIzVElxNTRF/PQ',
    'https://imgs.search.brave.com/h-GZl1Fg2iQngCbbOM7HfzKkWWwLmMnKv4HF3A9Z8xs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA2LzA5Lzc0/LzM2MF9GXzgwNjA5/NzQ2Nl9FRlV3VDFj/WENiZlBKa1hJZTcy/YzZnS3NNaGd6YXVp/Ni5qcGc',
    'https://imgs.search.brave.com/p-DhFSH6Jsvf2zU1V_aKGcv-t34OvyVjkF4mQG0he9k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3Lzg5LzQ4LzAx/LzM2MF9GXzc4OTQ4/MDE2MF9jbXVKRnRj/YjMzQ040cVg2TklW/dWMzOHdKSkFVZ1R1/Qy5qcGc',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intElement = document.querySelector('.int');
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add('active');
            hasAnimated = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    if (intElement) {
      observer.observe(intElement);
    }

    return () => {
      if (intElement) {
        observer.unobserve(intElement);
      }
    };
  });

  useEffect(() => {
    const intElements = document.querySelectorAll('.tech img');
    let hasAnimated = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.has(entry.target)) {
          entry.target.classList.add('active');
          hasAnimated.add(entry.target);
          observer.unobserve(entry.target);

          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.classList.remove('active');
          }, 2000);
        }
      });
    });

    intElements.forEach((element) => observer.observe(element));

    return () => {
      intElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    const heir = document.getElementById('heir');
    heir.classList.add('ot');
    const timer = setTimeout(() => {
      heir.style.opacity = '1';
      heir.classList.remove('ot');
    }, 2100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fk = document.getElementById('fk');
    const gb = document.getElementById('gb');
    const im = document.getElementById('im');
    const ln = document.getElementById('ln');
    const ye = document.getElementById('ye');
    fk.classList.add('n1');
    gb.classList.add('n2');
    im.classList.add('n3');
    ln.classList.add('n4');
    ye.classList.add('n5');
    const timer = setTimeout(() => {
      fk.classList.remove('n1');
      gb.classList.remove('n2');
      im.classList.remove('n3');
      ln.classList.remove('n4');
      ye.classList.remove('n5');
      fk.style.opacity = '1';
      gb.style.opacity = '1';
      im.style.opacity = '1';
      ln.style.opacity = '1';
      ye.style.opacity = '1';
    }, 2000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const mainImg = document.getElementById('main-img');
    mainImg.classList.add('mon');
    const LImg = document.getElementById('l1');
    LImg.classList.add('lori');
    const RImg = document.getElementById('r1');
    RImg.classList.add('lori');

    const timer = setTimeout(() => {
      mainImg.classList.remove('mon');
      mainImg.style.opacity = '1';
      mainImg.style.marginBottom = '0';

      LImg.classList.remove('lori');
      LImg.style.opacity = '1';
      LImg.style.marginBottom = '0';

      RImg.classList.remove('lori');
      RImg.style.opacity = '1';
      RImg.style.marginBottom = '0';
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const mainImg = document.getElementById('main-img');
    const LImg = document.getElementById('l1');
    const RImg = document.getElementById('r1');
    const worksDiv = document.querySelector('.works');

    let interval;

    const startAnimation = () => {
      interval = setInterval(() => {
        mainImg.classList.add('left-left');
        LImg.classList.add('left-l1');
        RImg.classList.add('left-l2');
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
        const timer = setTimeout(() => {
          mainImg.classList.remove('left-left');
          LImg.classList.remove('left-l1');
          RImg.classList.remove('left-l2');
        }, 700);
        return () => clearTimeout(timer);
      }, 10000);
    };

    const stopAnimation = () => {
      clearInterval(interval);
    };
    startAnimation();
    worksDiv.addEventListener('mouseenter', stopAnimation);
    worksDiv.addEventListener('mouseleave', startAnimation);
    return () => {
      clearInterval(interval);
      worksDiv.removeEventListener('mouseenter', stopAnimation);
      worksDiv.removeEventListener('mouseleave', startAnimation);
    };
  }, [images.length]);

  const handlePrevious = () => {
    const mainImg = document.getElementById('main-img');
    const LImg = document.getElementById('l1');
    const RImg = document.getElementById('r1');
    mainImg.classList.add('right-right');
    LImg.classList.add('right-r1');
    RImg.classList.add('right-r2');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    const timer = setTimeout(() => {
      mainImg.classList.remove('right-right');
      LImg.classList.remove('right-r1');
      RImg.classList.remove('right-r2');
    }, 700);
    return () => clearTimeout(timer);
  };

  const handleNext = () => {
    const mainImg = document.getElementById('main-img');
    const LImg = document.getElementById('l1');
    const RImg = document.getElementById('r1');
    mainImg.classList.add('left-left');
    LImg.classList.add('left-l1');
    RImg.classList.add('left-l2');
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    const timer = setTimeout(() => {
      mainImg.classList.remove('left-left');
      LImg.classList.remove('left-l1');
      RImg.classList.remove('left-l2');
    }, 700);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const elements = [
      {
        id: 'fk',
        hoverSrc: 'icons8-facebook (1).svg',
        originalSrc: 'icons8-facebook.svg',
      },
      {
        id: 'gb',
        hoverSrc: 'icons8-github (1).svg',
        originalSrc: 'icons8-github.svg',
      },
      {
        id: 'im',
        hoverSrc: 'icons8-instagram (1).svg',
        originalSrc: 'icons8-instagram.svg',
      },
      {
        id: 'ln',
        hoverSrc: 'icons8-linkedin.svg',
        originalSrc: 'icons8-linkedin (1).svg',
      },
      {
        id: 'ye',
        hoverSrc: 'icons8-youtube-logo (1).svg',
        originalSrc: 'icons8-youtube-logo.svg',
      },
    ];

    elements.forEach(({ id, hoverSrc, originalSrc }) => {
      const element = document.getElementById(id);
      if (element) {
        const handleMouseOver = () => {
          element.src = hoverSrc;
          element.classList.add('pom');
        };

        const handleMouseOut = () => {
          element.classList.remove('pom');
          element.src = originalSrc;
          element.classList.add('mop');

          const timer = setTimeout(() => {
            element.classList.remove('mop');
          }, 400);

          return () => clearTimeout(timer);
        };

        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);

        return () => {
          element.removeEventListener('mouseover', handleMouseOver);
          element.removeEventListener('mouseout', handleMouseOut);
        };
      }
    });
  }, []);
  const proje = () => {
    if (currentIndex === 0) {
      window.location.href = 'https://biprodeep12.github.io/Weather-Js/';
    } else {
      console.log('podkalo');
    }
  };

  return (
    <div className='poster' id='section1'>
      <div className='display'>
        <div className='cont-k'>
          <div className='introN'>
            <p>
              Hi, I am
              <span>
                <b> Biprodeep Bose</b>
              </span>
              <br /> A Fullstack Developer and Front Developer
            </p>
          </div>
          <div className='socl'>
            <a href='/' className='social'>
              <img id='fk' src='icons8-facebook.svg' alt='1' />
            </a>
            <a href='https://github.com/Biprodeep12' className='social'>
              <img id='gb' src='icons8-github.svg' alt='2' />
            </a>
            <a href='https://www.instagram.com/bosebd/' className='social'>
              <img id='im' src='icons8-instagram.svg' alt='3' />
            </a>
            <a
              href='https://www.linkedin.com/in/biprodeep-bose-3b47862ba/'
              className='social'>
              <img id='ln' src='icons8-linkedin (1).svg' alt='4' />
            </a>
            <a href='/' className='social'>
              <img id='ye' src='icons8-youtube-logo.svg' alt='5' />
            </a>
          </div>
          <div className='hier'>
            <a href='/' id='heir'>
              Hire Me
            </a>
          </div>
        </div>
        <div className='works' id='works'>
          <button onClick={handlePrevious} className='prev'>
            ←
          </button>
          <div className='left-img' id='l1' onClick={handlePrevious}>
            <img
              src={images[(currentIndex + images.length - 1) % images.length]}
              alt='Previous'
            />
          </div>
          <div className='main-img' id='main-img'>
            <img onClick={proje} src={images[currentIndex]} alt='Current' />
          </div>
          <div className='right-img' id='r1' onClick={handleNext}>
            <img
              src={images[(currentIndex + 1) % images.length]}
              id='huh'
              alt='Next'
            />
          </div>
          <button onClick={handleNext} className='next'>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
