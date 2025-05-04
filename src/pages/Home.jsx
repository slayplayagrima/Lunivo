import React from 'react';
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="main-content">
        <h1 className="home-title gradient">Track Your Investments.</h1>
        <h1 className="home-title">Grow Your Wealth.</h1>
        <p className="home-subtext">
          A modern platform for the next generation of investors. Monitor your portfolio, analyze market trends, and make informed investment decisions.
        </p>
        <div className="home-buttons">
          <button className="primary-btn">
            Get Started – It's Free <span className="arrow">→</span>
          </button>
          <button className="secondary-btn">View Demo</button>
        </div>
        {/* Uncomment below if you want cards */}
        {/* <div className="card-grid">
          <div className="dashboard-card">Card 1</div>
          <div className="dashboard-card">Card 2</div>
          <div className="dashboard-card">Card 3</div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
