import React from 'react';

import About from '../../pages/about/about.page';
import Home from '../../pages/home/home.page';
import Projects from '../../pages/projects/projects.page';

import './landing.component.css';

const Landing: React.FC = () => {
  return (
    <div className="content">
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default Landing;
