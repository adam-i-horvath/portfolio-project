import React from 'react';
import { NavLink } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import './header.component.css';

// import avatar from '../../common/images/bitmoji_me.png';

const Header: React.FC = () => {
  return (
    <nav className="header  animate__animated animate__bounceInDown">
      <ul className="header__left">
        <li>
          {/* <img className="header__avatar" src={avatar} alt="avatar" /> */}
          <div className="header__left__avatarlink">
            <NavLink to="/">
              <div className="header__avatar"></div>
              Adam
            </NavLink>
          </div>
        </li>
      </ul>
      <ul className="header__right">
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#projects">Projects</HashLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
