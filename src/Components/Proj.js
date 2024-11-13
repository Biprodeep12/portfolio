import React, { useEffect } from 'react';

export default function Proj() {
  useEffect(() => {
    const targetDiv = document.getElementById('llu');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  });
  return (
    <>
      <section className='tnoc' id='llu'>
        <div className='tnoct'>
          <div className='tn-head'>PROJECTS</div>
          <div className='tn-proj'>
            <a
              href='https://biprodeep12.github.io/Weather-Js/'
              className='sec1'
              id='proje1'>
              <img src='/weatherjs.png' alt='1' />
              <div className='sec1-about'>
                <h2>WeatherJs - Weather Dashboard</h2>
                <h3>Javascript</h3>
                <p>
                  My First Project using an API, this website displays
                  temperature, feels like temp, humidity, pressure, wind speed
                  and the weather state. Animated SVGs etc.
                </p>
              </div>
            </a>
            <a href='/' className='sec1' id='proje2'>
              +
            </a>
            <a href='/' className='sec1' id='proje3'>
              +
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
