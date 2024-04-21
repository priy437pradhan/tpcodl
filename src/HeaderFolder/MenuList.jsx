import React from 'react'
import "./Header.scss";

function MenuList() {
  return (
    <div className="menu-containerTP">
  <ul className="menu-listTP">
    <li className="menuTP">Home
      
    </li>
    <li class="menuTP">Corporate
      <ul className="dropdownTP">
        <li><a href="#">Vision - Mission - Values</a></li>
        <li><a href="#">Ethics</a></li>
        <li><a href="#">Compliance</a></li>
        <li><a href="#">Corporate Policies</a></li>
        <li><a href="#">Investor Relations</a></li>
      </ul>
    </li>
    <li class="menuTP">Sustainability
      <ul className="dropdownTP">
        <li><a href="#">Dresses</a></li>
        <li><a href="#">Tops</a></li>
        <li><a href="#">Skirts</a></li>
      </ul>
    </li>
    <li class="menuTP">Tariff &amp; Regulations
      <ul className="dropdownTP">
        <li><a href="#">RST Details</a></li>
        <li><a href="#">Supply Code</a></li>
        <li><a href="#">Distribution Code</a></li>
        <li><a href="#">Electricity (Rights of Consumers) Rules, 2020</a></li>
      </ul>
    </li>
    
    <li class="menuTP">Men
      <ul className="dropdownTP">
        <li><a href="#">Shirts</a></li>
        <li><a href="#">T-Shirts</a></li>
        <li><a href="#">Jeans</a></li>
      </ul>
    </li>
    <li class="menuTP">Men
      <ul className="dropdownTP">
        <li><a href="#">Shirts</a></li>
        <li><a href="#">T-Shirts</a></li>
        <li><a href="#">Jeans</a></li>
      </ul>
    </li>
    <li class="menuTP">Men
      <ul className="dropdownTP">
        <li><a href="#">Shirts</a></li>
        <li><a href="#">T-Shirts</a></li>
        <li><a href="#">Jeans</a></li>
      </ul>
    </li>
    <li class="menuTP">Women
      <ul className="dropdownTP">
        <li><a href="#">Dresses</a></li>
        <li><a href="#">Tops</a></li>
        <li><a href="#">Skirts</a></li>
      </ul>
    </li>
  </ul>
</div>
  )
}

export default MenuList;