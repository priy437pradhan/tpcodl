import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Corporate",
    subItems: [ 
      { title: "Vision- Mission-Values", path: "/vision-mission" },
      { title: "Ethics", path: "/ethics" },
      { title: "Compliance", path: "/compliance" },
      { title: "Corporate Policies", path: "/corporate-policies" },
      { title: "Investor Relations", path: "/investor-relations" },
    ],
  },
  {
    title: "Sustainability",
    subItems: [
      { title: "Dreasses", path: "#" },
      { title: "Dresses", path: "#" },
      { title: "Tops", path: "#" },
      { title: "Skirts", path: "#" },
    ],
  },
  {
    title: "Tariff & Regulations",
    subItems: [
      { title: "RST Details", path: "#" },
      { title: "Supply Code", path: "#" },
      { title: "Distribution Code", path: "#" },
      { title: "Electricity (Rights of Consumers) Rules, 2020", path: "#" },
    ],
  },
];

function MenuList() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="menu-containerTP">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`menu-listTP ${showMenu ? "show" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="menuTP">
            {item.subItems ? (
              <>
                {item.title}
                <ul className="dropdownTP">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.path}>{subItem.title}</a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a href={item.path}>{item.title}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { MenuList, menuItems };
