import React from 'react';

import './loading.component.css';

const Loading: React.FC = () => {
  return (
    <div className="drawing animate__animated animate__fadeIn" id="loading">
      <div className="loading-dot "></div>
    </div>
  );
};

export default Loading;
