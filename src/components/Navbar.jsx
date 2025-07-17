import React from 'react';
import "../styles/Navbar.css";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/home">
          <img src={logo} alt="Lunivo Logo" className="logo" />
          </Link>
        </div>

        <div className="navbar-links">
          <a href="#">Dashboard</a>
          <a href="#">Portfolio</a>
          <Link to="/blog"> 
            Blog
          </Link>
          <a href="#">Markets</a>
          <Link to="/support">
         Support
          </Link>
          
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
