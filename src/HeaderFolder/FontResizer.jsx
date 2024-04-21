import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";

function FontResizer() {
  const [fontSize, setFontSize] = useState(16); 

  const increaseFontSize = () => {
    const bodyElements = document.body.getElementsByTagName('*');
    Array.from(bodyElements).forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const currentFontSize = parseFloat(computedStyle.fontSize);
      element.style.fontSize = `${currentFontSize + 2}px`;
    });
    setFontSize(prevSize => prevSize + 2);
  };

  const decreaseFontSize = () => {
    const bodyElements = document.body.getElementsByTagName('*');
    Array.from(bodyElements).forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const currentFontSize = parseFloat(computedStyle.fontSize);
      element.style.fontSize = `${currentFontSize - 2}px`;
    });
    setFontSize(prevSize => prevSize - 2);
  };

  const resetFontSize = () => {
    const bodyElements = document.body.getElementsByTagName('*');
    Array.from(bodyElements).forEach(element => {
      element.style.fontSize = '16px';
    });
    setFontSize(16); 
  };

  return (
    <div className="font-resizer">
      <button onClick={increaseFontSize}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button onClick={decreaseFontSize}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button onClick={resetFontSize}>
        <FontAwesomeIcon icon={faSyncAlt} />
      </button>
    </div>
  );
}

export default FontResizer;
