/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

import { useState } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './sidebar.component.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const scrollToTop = () => {
    setOpen(!isOpen);
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Menu
      right
      width={265}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      isOpen={isOpen}
    >
      <span className="sidebar__title"></span>
      <Link to="/" onClick={scrollToTop}>
        Home
      </Link>
      <HashLink to="/#about" onClick={handleIsOpen}>
        About
      </HashLink>
      <HashLink to="/#projects" onClick={handleIsOpen}>
        Projects
      </HashLink>
      <Link to="/contact" onClick={handleIsOpen}>
        Contact
      </Link>
    </Menu>
  );
};
