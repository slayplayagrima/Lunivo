import React from 'react';
import "../styles/Navbar.css";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

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
        <Link to="/login">
          <button className="btn-login">Log In</button>
          </Link>
          <Link to="/signup">
          <button className="btn-signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
