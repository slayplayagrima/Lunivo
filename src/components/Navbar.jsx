import React from 'react';
import "../styles/Navbar.css";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Lunivo Logo" className="logo" />
        </div>

        <div className="navbar-links">
          <a href="#">Dashboard</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Markets</a>
          <a href="#">Support</a>
        </div>

        <div className="navbar-buttons">
          <button className="btn-login">Log In</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
