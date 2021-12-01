import React from 'react';

import './about.page.css';

import { MdLocationPin } from 'react-icons/md';

import { IconContext } from 'react-icons';

const About: React.FC = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__title">About me</h1>
      <div className="about__top">
        <div className="about__top_left">
          <div className="about__avatar"></div>
          {/* <img className="about__avatar" src={avatar} alt="me" /> */}
        </div>
        <div className="about__top_right">
          <div className="about__header">
            <IconContext.Provider value={{ className: 'about__header-icons' }}>
              <MdLocationPin />
              <a
                href="https://www.google.com/maps/place/P%C3%BCsp%C3%B6klad%C3%A1ny,+4150/@47.3077461,21.0381138,12z/data=!3m1!4b1!4m5!3m4!1s0x4746dc2a9ca2df39:0x400c4290c1e1430!8m2!3d47.3216529!4d21.1185953"
                target="_blank"
                rel="noreferrer"
              >
                Hungary, 4150 Puspokladany
              </a>
            </IconContext.Provider>
          </div>
          <p className="about__fl">
            Hi, my name is Adam Horvath, but you can just call me Adam or Adi.
            👋
          </p>
          <p className="about__sl">
            I am a self-taught web developer. Since my childhood, i love art and
            design. I always try to design stuff with my unique point of view. I
            also love to create things that can be usefull to others. 🤓
          </p>
        </div>
      </div>
      <div className="about__bottom">
        <p className="about__tl__fl">
          I started coding since I was in high school. Coding is also an art for
          me. I love it and now I have the opportunity to design along with the
          coding.
        </p>
        <p className="about__tl__sl">
          My vision is to make the world a better place. It is time for us to
          create more good stuff that helps for it to become a better place.
        </p>
      </div>
    </div>
  );
};

export default About;
