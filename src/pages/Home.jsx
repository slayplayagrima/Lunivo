import React from 'react';
import Navbar from "../components/Navbar";
import { Card, CardContent, Typography } from '@mui/material';
import "../styles/Home.css";

const Home = () => {
  return(
    <div className="home-container">
      <Navbar/>
      
      <div className="main-content">
        <h1 className="home-title gradient">Track Your Investments.</h1>
        <h1 className="home-title">Grow Your Wealth.</h1>

        <p className="home-subtext">
          A modern platform for the next generation of investors. Monitor your portfolio,
          analyze market trends, and make informed investment decisions.
        </p>

        <div className="home-buttons">
          <button className="primary-btn">
            Get Started – It's Free <span className="arrow">→</span>
          </button>
          <button className="secondary-btn">View Demo</button>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <h1  style={{ color: 'rgba(14, 165, 233, 1)'}}>25K+</h1>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h1 style={{ color: 'rgba(139, 92, 246, 1)'}}>$350M+</h1>
            <p>Assets Tracked</p>
          </div>
          <div className="stat-item">
            <h1 style={{ color: 'rgba(16, 185, 129, 1)' }}>99.9%</h1>
            <p>Uptime</p>
          </div>
          <div className="stat-item">
            <h1 style={{ color: 'rgba(249, 115, 22, 1)'}}>4.8/5</h1>
            <p>User Rating</p>
          </div>
        </div>

        <div style={{padding:'10px',marginTop:'140px',marginBottom:'60px'}}>
          <h2 style={{fontSize:'30px'}}>Everything You Need to Track Your Investments</h2>
          <p style={{color:'#94a3b8'}}>Lunivo provides powerful tools designed to help you manage your investments with confidence.</p>
        </div>
          {/* Cards Section */}
          <div className="card-grid">

            <Card className="custom-card card-1" sx={{ backgroundColor: '#1e293b' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Portfolio Tracker
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Track all your investments in one place with detailed performance analysis.
                </Typography>
                <div className="learn-more">Learn more →</div>
              </CardContent>
            </Card>

            <Card  className="custom-card card-2">
              <CardContent>
                <Typography variant="h5" component="div">
                  Market Insights
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay updated with real-time market trends and news.
                </Typography>
                <div className="learn-more" >Learn more →</div>
              </CardContent>
            </Card>

            <Card className="custom-card card-3">
              <CardContent>
                <Typography variant="h5" component="div">
                  Smart Alerts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Set up customized alerts for your investments to never miss a key event.
                </Typography>
                <div className="learn-more">Learn more →</div>
              </CardContent>
            </Card>

          </div>
      </div>
    </div>
  );
};

export default Home;
