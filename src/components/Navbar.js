
import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
  <     span className="logo-text">FreshBite</span>
        <img src="/dine.png" alt="FreshBite Logo" className="logo-img" />
    </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/Book-table">Book Table</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart ({cartItemCount})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



