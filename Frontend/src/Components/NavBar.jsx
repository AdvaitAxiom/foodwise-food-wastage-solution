import React from 'react'
import "../Styles/CSS/navBar.css"
import { Link } from 'react-router-dom';
import NavDropDown from './NavDropDown';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navTitle">
          FoodWise
      </div>
      <div className="navLinks">
        <Link>Home</Link>
        <Link>Organisations</Link>
        <NavDropDown title={"Tools"} menuItems={["Cheffy","Meal Planner","Expiration Tracker"]}/>
        <Link>About Us</Link>
        <NavDropDown title={"user"} menuItems={["Account","Log Out"]}/>
      </div>
    </div>
  )
}

export default NavBar
