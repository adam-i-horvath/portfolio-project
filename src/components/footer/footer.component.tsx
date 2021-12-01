import React from 'react';

import './footer.component.css';

import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { GrFacebook } from 'react-icons/gr';

import { IconContext } from 'react-icons';

const Footer: React.FC = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__left">© {year} Adam Horvath</div>
      <div className="footer__right">
        <IconContext.Provider value={{ className: 'footer__react-icons' }}>
          <a
            className="github"
            href="https://github.com/adam-i-horvath"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/horvathadamistvan/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
          <a
            className="facebook"
            href="https://www.facebook.com/adamhorvath.admin/"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebook />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/adamhorvath.admin/"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </a>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
