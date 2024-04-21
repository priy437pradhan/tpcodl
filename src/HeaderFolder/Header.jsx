import React from "react";

import tpcodllogo from "../assets/tpcodllogo.png";
import "./Header.scss";
import SearchBox from "./Search";
import Email from "./Email";
import FontResizer from "./FontResizer";
import LanguageChanger from "./LanguageChanger";
import MenuList from "./MenuList";

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
          <SearchBox />
          <Email />

          <LanguageChanger />
          <FontResizer />
        </ul>
        <MenuList />
      </div>
    </header>
  );
};

export default Header;
