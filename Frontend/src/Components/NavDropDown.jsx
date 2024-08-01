import React, { useState } from 'react';
import '../Styles/CSS/navDropDown.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      {title === "user" && <FaUserCircle fontSize={"40px"}/>}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          {menuItems.map((item, index) => (
            <Link to={"/"+item.path} key={index} className="dropdown-item">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
