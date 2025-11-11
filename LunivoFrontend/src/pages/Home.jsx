import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { Users, Star, Lightbulb, ArrowRight } from 'lucide-react';
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="main-content">
        <h1 className="home-title gradient">Track Your Investments.</h1>
        <h1 className="home-title">Grow Your Wealth.</h1>

        <p className="home-subtext">
          A modern platform for the next generation of investors. Monitor your portfolio,
          analyze market trends, and make informed investment decisions.
        </p>

        <div className="home-buttons">
          <Link to="/signup"><button className="primary-btn">
            Get Started – It's Free <span className="arrow">→</span>
          </button></Link>

          <button className="secondary-btn">View Demo</button>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-item">
            <h1 style={{ color: 'rgba(14, 165, 233, 1)' }}>25K+</h1>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h1 style={{ color: 'rgba(139, 92, 246, 1)' }}>$350M+</h1>
            <p>Assets Tracked</p>
          </div>
          <div className="stat-item">
            <h1 style={{ color: 'rgba(16, 185, 129, 1)' }}>99.9%</h1>
            <p>Uptime</p>
          </div>
          <div className="stat-item">
            <h1 style={{ color: 'rgba(249, 115, 22, 1)' }}>4.8/5</h1>
            <p>User Rating</p>
          </div>
        </div>

        {/* Intro to Cards */}
        <div style={{ padding: '10px', marginTop: '140px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '30px' }}>
            Everything You Need to Track Your Investments
          </h2>
          <p style={{ color: '#bdd1ec' }}>
            Lunivo provides powerful tools designed to help you manage your investments with confidence.
          </p>
        </div>

        {/* CARDS */}
        <div className="card-grid">
          {/* Card 1 */}
          <Card className="custom-card card-1" sx={{ backgroundColor: '#0f172a' }}>
            <CardContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="chart-icon"
                style={{ marginBottom: '16px', backgroundColor: '#0ea5e942', color: '#60a5fa' }}
              >
                <line x1="12" x2="12" y1="20" y2="10" />
                <line x1="18" x2="18" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="16" />
              </svg>
              <Typography sx={{ letterSpacing: '1px', fontSize: '18px', color: 'white' }} variant="h5">
                Portfolio Tracking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Track all your investments in one place with real-time updates and performance analytics.
              </Typography>
              <div className="learn-more" style={{ color: '#60a5fa' }}>Learn more →</div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="custom-card card-2" sx={{ backgroundColor: '#0f172a' }}>
            <CardContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="chart-icon"
                style={{ marginBottom: '16px', backgroundColor: '#8b5cf633', color: 'rgba(128, 65, 230, 0.8)' }}
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              <Typography sx={{ letterSpacing: '1px', fontSize: '18px', color: 'white' }} variant="h5">
                Market Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Access detailed market data, trends, and insights to make informed investment decisions.
              </Typography>
              <div className="learn-more" style={{ color: 'rgba(128, 65, 230, 0.8)' }}>Learn more →</div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="custom-card card-3" sx={{ backgroundColor: '#0f172a' }}>
            <CardContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="chart-icon"
                style={{ marginBottom: '16px', backgroundColor: '#10b98133', color: 'rgba(97, 226, 120, 0.8)' }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Typography sx={{ letterSpacing: '1px', fontSize: '18px', color: 'white' }} variant="h5">
                Investment Discovery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover new investment opportunities tailored to your financial goals and risk tolerance.
              </Typography>
              <div className="learn-more" style={{ color: 'rgba(97, 226, 120, 0.8)' }}>Learn more →</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <div className="container">
          <div className="grid">
            <div className="content">
              <h2 className="heading">Why Choose Lunivo</h2>
              <div className="features">
                {[
                  {
                    title: "User-Friendly Interface",
                    desc: "Clean, intuitive design that makes managing investments simple for beginners."
                  },
                  {
                    title: "Comprehensive Analytics",
                    desc: "Detailed performance metrics and visualization tools to understand your investments."
                  },
                  {
                    title: "Mobile Responsive",
                    desc: "Access your portfolio anytime, anywhere on any device with our responsive platform."
                  },
                  {
                    title: "Advanced Investment Analysis",
                    desc: "Powerful tools for portfolio diversification, risk assessment, and return optimization."
                  }
                ].map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="circle">
                      <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text">
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="visual-content" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="section-title">What Our Users Say</h2>
            <p className="section-subtext">
              Hear from investors who have transformed their investment journey with Lunivo.
            </p>
          </div>

          <div className="testimonials-grid">
            {[
              {
                name: "Alex Johnson",
                role: "New Investor",
                rating: 5,
                text:
                  '"As a beginner investor, Lunivo made it easy for me to track my investments and learn about market trends. The interface is intuitive and the insights are valuable."',
                color: "blue"
              },
              {
                name: "Sarah Chen",
                role: "Experienced Trader",
                rating: 4,
                text:
                  '"The analytics tools in Lunivo have helped me optimize my portfolio performance. I particularly love the market trend predictions and alerts."',
                color: "purple"
              },
              {
                name: "Michael Rodriguez",
                role: "Financial Advisor",
                rating: 5,
                text:
                  '"I recommend Lunivo to all my clients. The platform\'s comprehensive portfolio tracking and user-friendly interface make it perfect for investors of all experience levels."',
                color: "green"
              }
            ].map((user, index) => (
              <Card key={index} style={{ backgroundColor: '#0f172a' }} className="glass-card">
                <CardContent>
                  <div className="testimonial-header">
                    <div className={`icon-circle ${user.color}`}>
                      <Users className="icon" />
                    </div>
                    <div className="user-info">
                      <h3 className="user-name">{user.name}</h3>
                      <p className="user-role">{user.role}</p>
                    </div>
                  </div>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="star-icon"
                        fill={i < user.rating ? "#EAB308" : "none"}
                      />
                    ))}
                  </div>
                  <Typography className="testimonial-text">{user.text}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
<section className="howitworks-section">
  <div className="howitworks-container">
    <div className="howitworks-header">
      <h2>How Lunivo Works</h2>
      <p>
        Get started with Lunivo in just a few simple steps and take control of your investment journey.
      </p>
    </div>

    <div className="howitworks-grid">
      <div className="step">
        <div className="glass-card">
          <div className="step-icon blue">1</div>
          <h3>Create Account</h3>
          <p>Sign up for free and set up your investment profile in minutes.</p>
        </div>
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="step">
        <div className="glass-card">
          <div className="step-icon purple">2</div>
          <h3>Connect Assets</h3>
          <p>Link your investment accounts or manually add your assets.</p>
        </div>
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="step">
        <div className="glass-card">
          <div className="step-icon green">3</div>
          <h3>Track Performance</h3>
          <p>Monitor your portfolio's performance with real-time analytics.</p>
        </div>
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="step">
        <div className="glass-card">
          <div className="step-icon orange">4</div>
          <h3>Optimize Growth</h3>
          <p>Get insights and recommendations to optimize your investment strategy.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="educational-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Educational Resources</h2>
      <p className="section-subtitle">
        Expand your investment knowledge with our extensive library of educational resources.
      </p>
    </div>

    <div className="resources-grid">
      <div className="resource-card card-blue">
        <div className="card-image">
          <img
            src="src/assets/investmentbasics.png"
            alt="Investment Basics"
          />
          <div className="gradient-overlay"></div>
          <div className="card-label">
            <span>Beginner</span>
          </div>
        </div>
        <div className="card-content">
          <h3>Investment Basics</h3>
          <p>Learn the fundamentals of investing and build a strong foundation for your financial future.</p>
          <div className="read-more">
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrow-icon" viewBox="0 0 24 24"><path d="M10 19l7-7-7-7v14z"/></svg>
          </div>
        </div>
      </div>

      <div className="resource-card card-purple">
        <div className="card-image">
          <img
            src="src/assets/technical.png"
            alt="Technical Analysis"
          />
          <div className="gradient-overlay"></div>
          <div className="card-label">
            <span>Intermediate</span>
          </div>
        </div>
        <div className="card-content">
          <h3>Technical Analysis</h3>
          <p>Master chart patterns and technical indicators to improve your trading decisions.</p>
          <div className="read-more">
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrow-icon" viewBox="0 0 24 24"><path d="M10 19l7-7-7-7v14z"/></svg>
          </div>
        </div>
      </div>

      <div className="resource-card card-green">
        <div className="card-image">
          <img
            src="src/assets/portfolio.png"
            alt="Portfolio Strategies"
          />
          <div className="gradient-overlay"></div>
          <div className="card-label">
            <span>Advanced</span>
          </div>
        </div>
        <div className="card-content">
          <h3>Portfolio Strategies</h3>
          <p>Explore advanced portfolio management techniques to maximize returns and minimize risk.</p>
          <div className="read-more">
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrow-icon" viewBox="0 0 24 24"><path d="M10 19l7-7-7-7v14z"/></svg>
          </div>
        </div>
      </div>
    </div>

    <div className="resources-button">
      <Link to="/blog" className="explore-btn">
        <Lightbulb class="icon-left"></Lightbulb>
        Explore All Resources
        </Link> 
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
};

export default Home;
