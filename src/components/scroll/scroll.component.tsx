import React, { useEffect, useState } from 'react';

import './scroll.component.css';

import { IoChevronUpSharp } from 'react-icons/io5';

const Scroll: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };
  return (
    <div className="scrolltotop">
      {showButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top animate__animated animate__pulse animate__infinite	animate__faster "
        >
          <IoChevronUpSharp />
        </button>
      )}
    </div>
  );
};

export default Scroll;
