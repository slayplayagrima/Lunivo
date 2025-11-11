import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
             <div style={{marginBottom:"0",fontSize:"1.5rem", textAlign:"center",color:"hsl(204, 88%, 66%)",fontWeight:"bold"}}>Lunivo</div>
            </Link>
            <p className="footer-description">
              Track, analyze, and grow your investments with our intuitive platform designed for modern investors.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Platform</h3>
            <ul className="footer-links">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/market">Markets</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lunivo. All rights reserved.</p>
          <p>Designed for modern investors</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
