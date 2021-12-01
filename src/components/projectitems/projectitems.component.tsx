import React from 'react';

import './projectitems.component.css';

import { SiGithub } from 'react-icons/si';
import { BiLink } from 'react-icons/bi';

interface Props {
  id: string;
  title: string;
  info: string;
  technologies: string;
  mockup: string;
  projectLinkGithub: string;
  projectLinkWeb: string;
}

const ProjectItems: React.FC<Props> = ({
  id,
  title,
  info,
  technologies,
  mockup,
  projectLinkGithub,
  projectLinkWeb,
}) => {
  return (
    <div className="projectitems">
      <span className="project-title">{title}</span>
      <span className="project-info">{info}</span>
      <span className="project-technologies">{technologies}</span>
      <div className="project-images">
        <img
          className="project-image"
          id={id}
          src={String(mockup)}
          alt="mobile"
        />
      </div>
      <div className="project-links">
        <a
          className="project-linkgithub"
          href={projectLinkGithub}
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub /> <h4>GitHub Repository</h4>
        </a>
        <a
          className="project-linkweb"
          href={projectLinkWeb}
          target="_blank"
          rel="noreferrer"
        >
          <BiLink /> <h4>Live website</h4>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
