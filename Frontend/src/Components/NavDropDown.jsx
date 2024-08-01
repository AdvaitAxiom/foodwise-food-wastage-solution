import React, { useState } from 'react';
import '../Styles/CSS/navDropDown.css';
import { FaUserCircle } from 'react-icons/fa';

const NavDropDown = ({ title, menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="navbar-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title !== "user" && title}
      {title === "user" && <FaUserCircle />}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          {menuItems.map((item, index) => (
            <div key={index} className="dropdown-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
