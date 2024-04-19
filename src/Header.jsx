import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import tpcodllogo from "./assets/tpcodllogo.png";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={tpcodllogo} alt="Logo" />
      </div>
      <div className="flex-row">
        <ul className="header-list">
            <li className="toldfree">
            Toll Free No.-
            <span>
                <a href="tel:1912">1912</a>/
                <a href="tel:18003457122">1800 345 7122</a>
            </span>
            </li>
            <li className="search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search" />
            </li>
            <li className="email">Email</li>
            <li className="font-resizer">Font Resizer</li>
            <li className="language">Language</li>
        </ul>

  <ul className="menu-list">
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
    <li className="menu">Menu</li>
  </ul>

      </div>
    </header>
  );
};

export default Header;
