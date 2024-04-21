import React from 'react'
import BACKGROUND from '../assets/BACKGROUND.png/'
import './body.scss'

function Body() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, 
      behavior: 'smooth',
    });
  };

  return (
    <div className="body" onScroll={handleScroll}>
      <img src={BACKGROUND} className="bodybackgroundImg" alt="Description of the image" />
    </div>
  );
}

export default Body