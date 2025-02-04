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
            <a
              href='https://chat-room-sepia-iota.vercel.app/'
              className='sec1'
              id='proje1'>
              <img src='/chatImgGit.png' alt='1' />
              <div className='sec1-about'>
                <h2>Chat.Nx - A Simple ChatRoom</h2>
                <h3>React and Javascript</h3>
                <p>
                  This is a simple Chatroom made with React and javascript, html
                  and css. For database I am using Firebase firestore and
                  realtime storage. No Authentication ,A fun Prject.
                </p>
              </div>
            </a>
            <a
              href='https://drug-shop-k8vj.vercel.app/'
              className='sec1'
              id='proje1'>
              <img src='/drug.png' alt='1' />
              <div className='sec1-about'>
                <h2>Drug - A Drug Shop</h2>
                <h3>React and Javascript</h3>
                <p>
                  This is a drug store where we can add and buy
                  drugs/medicines.This is made with React and javascript, html
                  and css. For database I am using Firebase firestore, this is
                  my first project with firebase. With Firebase Authentication.
                </p>
              </div>
            </a>
            <a
              href='https://news-nextjs-gamma.vercel.app/'
              className='sec1'
              id='proje1'>
              <img src='/newsImg.png' alt='1' />
              <div className='sec1-about'>
                <h2>News.Nx - Simple News Platform</h2>
                <h3>Next and Javascript</h3>
                <p>
                  This is a simple News platform, this being made with Next,
                  javascript, html and css. The news can be filtered between
                  relevance and popularity. The news are collected from an API.
                </p>
              </div>
            </a>
            <a
              href='https://ecomfracture.vercel.app/'
              className='sec1'
              id='proje1'>
              <img src='/ecomImg.png' alt='1' />
              <div className='sec1-about'>
                <h2>Wooper - Ecom Platform</h2>
                <h3>Next and Javascript</h3>
                <p>
                  This is Huge Project Currently Ongoing, this being made with
                  Next, javascript, html and css.I am using Firebase Firestore
                  ,Realtime storage and firebase Authentication.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
