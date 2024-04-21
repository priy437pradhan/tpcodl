import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";

const Email = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectEmail = (email) => {
    console.log('Selected email:', email);
  };

  return (
    <li className="email" onClick={handleToggleDropdown}>
      <FontAwesomeIcon icon={faEnvelope} />
      <span className="email-label">Mail Us</span>
      {isDropdownOpen && (
        <div className="email-dropdown">
          <div onClick={() => handleSelectEmail('customercare@tpcentralodisha.com')}>
            customercare@tpcentralodisha.com
          </div>
        </div>
      )}
    </li>
  );
};

export default Email;
