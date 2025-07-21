import React, { useState } from 'react';
import "../styles/Navbar.css";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/home" onClick={closeMenu}>
            <img src={logo} alt="Lunivo Logo" className="logo" />
          </Link>
        </div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
          <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <Link to="/market" onClick={closeMenu}>Markets</Link>
          <Link to="/support" onClick={closeMenu}>Support</Link>
        </div>

        <div className={`navbar-buttons ${menuOpen ? 'active' : ''}`}>
          <Link to="/login" onClick={closeMenu}>
            <button className="btn-login">Log In</button>
          </Link>
          <Link to="/signup" onClick={closeMenu}>
            <button className="btn-signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
