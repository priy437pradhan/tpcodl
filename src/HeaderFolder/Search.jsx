import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";

const SearchBox = ({ menuItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptContent, setPromptContent] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowPrompt(value.trim().length > 2); 
    setTimeout(() => {
      updatePrompt(value);
    });
  };

  const updatePrompt = (searchTerm) => {
    const matchedItems = [];
    for (const menuItem of menuItems) {
      if (menuItem.subItems) {
        const matchingSubItems = menuItem.subItems.filter(subItem =>
          subItem.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (matchingSubItems.length > 0) {
          matchedItems.push(...matchingSubItems);
        }
      }
    }
  
    if (matchedItems.length > 0) {
      setPromptContent(
        matchedItems.map((item, index) => (
          <span className='matchedItems'
            key={index}
            style={{ color: "#000", cursor: "pointer", fontWeight: "bold"}} 
            onClick={() => { window.location.href = item.path; }}>
            {item.title}
          </span>
        ))
      );
    } else {
      setPromptContent(
        <span 
          style={{ color: "red", cursor: "pointer", fontWeight: "bold" }}>
          Term not found
        </span>
      );
    }
  };
  

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
    } else {
      console.log('Search term:', searchTerm);
    }
  };

  return (
    <li className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div id="searchPrompt" className={`search-prompt ${showPrompt ? '' : 'd-none'}`}>
        {promptContent}
      </div>
      <FontAwesomeIcon onClick={handleSearch} icon={faSearch} />
    </li>
  );
};

export default SearchBox;
