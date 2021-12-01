import React from 'react';

import './home.page.css';

const Home: React.FC = () => {
  document.documentElement.style.setProperty('--animate-duration', '3s');

  return (
    <>
      <div className="home">
        <h5 className="home__fl animate__animated animate__backInLeft animate__delay-1.2s">
          Hello, my name is
        </h5>
        <h1 className="home__sl animate__animated animate__zoomInDown">
          Adam Hørvath
        </h1>
        <h2 className="home__tl animate__animated animate__backInRight animate__delay-1.2s">
          I am a frontend web developer specialised in 'React.js'.
        </h2>

        <div className="home__button animate__animated animate__backInDown animate__faster">
          <a className="home__button__a" href="contact" rel="noreferrer">
            Contact
          </a>
        </div>
      </div>
      <div className="scroll"></div>
    </>
  );
};

export default Home;
