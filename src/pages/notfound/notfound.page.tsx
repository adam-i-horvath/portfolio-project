import React from 'react';

import './notfound.page.css';

const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page not found.</h2>
      <h3 className="notfound__emoji">😳</h3>
    </div>
  );
};

export default NotFound;
