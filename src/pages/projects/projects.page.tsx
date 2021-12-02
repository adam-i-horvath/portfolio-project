import React from 'react';

import ProjectItems from '../../components/projectitems/projectitems.component';
import './projects.page.css';

const Projects: React.FC = () => {
  const mockup_image =
    require('../../common/images/portfolio_mockup.png').default;
  const mobileDemo = require('../../common/images/demo.png').default;

  return (
    <div className="projects" id="projects">
      <h1 className="projects-title"> Projects </h1>

      <ProjectItems
        id="portfolioMobileImg"
        title="Portfolio Project (Typescript)"
        info="This is my portfolio website. I use React for the development."
        technologies="Technologies: React, Typescript, CSS3, HTML5, React Icons"
        mockup={mockup_image}
        projectLinkGithub="https://github.com/adam-i-horvath/portfolio-project"
        projectLinkWeb="https://adam-horvath-portfolio-project.web.app/"
      />
      <ProjectItems
        id="portfolioMobileImg"
        title="Lorem ipsum "
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        technologies="TECHNOLOGIES: Lorem, Ipsum, DOLOR, sit, Amet"
        mockup={mobileDemo}
        projectLinkGithub="https://github.com/adam-i-horvath"
        projectLinkWeb="#"
      />
      <ProjectItems
        id="Lorem ipsum dolor sit amet"
        title="Dolor sit "
        info="Ornare lectus sit amet est placerat in egestas. Ut placerat orci nulla pellentesque dignissim enim sit. "
        technologies="TECHNOLOGIES: Lorem, Ipsum, DOLOR"
        mockup={mobileDemo}
        projectLinkGithub="https://github.com/adam-i-horvath"
        projectLinkWeb="#"
      />
    </div>
  );
};

export default Projects;
