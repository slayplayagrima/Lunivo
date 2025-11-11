// React and Chart Libraries
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

// Styles and Layout
import '../styles/Portfolio.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Chart Colors
const performanceData = [
  { month: 'Jan', value: 14000 },
  { month: 'Feb', value: 14250 },
  { month: 'Mar', value: 14500 },
  { month: 'Apr', value: 14900 },
  { month: 'May', value: 15250 },
  { month: 'Jun', value: 15700 },
  { month: 'Jul', value: 16424 },
];

const returnsData = [
  { name: 'Stocks', returns: 400 },
  { name: 'Funds', returns: 180 },
  { name: 'Bonds', returns: 93.95 },
];

const Portfolio = () => {
  return (
    <>
      <Navbar />

      {/* Portfolio Container */}
      <div className="portfolio-container">

        {/* Header Section */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">Investment Portfolio</h1>
          <p className="portfolio-subtext">
            Track and manage your investment performance across stocks, mutual funds, and bonds with real-time analytics
          </p>
        </div>

        {/* Summary Cards */}
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <p style={{textAlign:"center",color:"#bdd1ec", fontSize:"0.8rem",marginBottom:"0"}}>Total portfolio value</p>
            <h2 className="card-value">₹16,424.50</h2>
            <p className="card-change green">+5.23% this month</p>
          </div>

          <div className="portfolio-card">
          <p style={{textAlign:"center",color:"#bdd1ec", fontSize:"0.8rem",marginBottom:"0"}}>Total Returns</p>
            <h2 className="card-value green">+ ₹673.95</h2>
            <p className="card-change green">+4.28% total return</p>
          </div>

          <div className="portfolio-card">
          <p style={{textAlign:"center",color:"#bdd1ec", fontSize:"0.8rem",marginBottom:"0"}}>Asset Diversity</p>
            <h2 className="card-value">7</h2>
            <p className="card-breakdown">
              Stocks <span className="badge">3</span> &nbsp;
              Funds <span className="badge">2</span> &nbsp;
              Bonds <span className="badge">2</span>
            </p>
          </div>

          <div className="portfolio-card">
          <p style={{textAlign:"center",color:"#bdd1ec", fontSize:"0.8rem",marginBottom:"0"}}>Top Performer</p>
            <h2 className="card-value">VTI</h2>
            <p className="card-change green">+3.15% today</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="chart-card full-width">
          <h3 className="chart-title">Portfolio Performance Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Returns Analysis Chart */}
        <div className="chart-card full-width">
          <h3 className="chart-title">Returns by Asset Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={returnsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="returns" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Portfolio;
