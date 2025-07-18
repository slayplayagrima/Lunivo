// =================== Imports ===================
import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Tabs, Tab, TextField, Button, Card, CardContent
} from '@mui/material';
import { Search, RefreshCw, Filter } from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

import '../styles/Market.css'; // custom styling
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// =================== Component ===================
export default function Market() {
  // -------------------- State Variables --------------------
  const [marketOpen, setMarketOpen] = useState(true); // market status
  const [countdown, setCountdown] = useState(''); // live countdown to close

  // -------------------- Market Close Timer --------------------
  useEffect(() => {
    const closeTime = new Date();
    closeTime.setHours(15, 30, 0);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = closeTime - now;

      if (diff > 0) {
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(`${hours}h ${minutes}m ${seconds}s remaining`);
        setMarketOpen(true);
      } else {
        setCountdown(`Market closed`);
        setMarketOpen(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // -------------------- Sample Chart Data --------------------
  const lineChartData = [
    { time: '9:30', price: 4177 },
    { time: '10:00', price: 4180 },
    { time: '11:00', price: 4182 },
    { time: '12:00', price: 4184 },
    { time: '1:00', price: 4188 },
    { time: '2:00', price: 4190 },
    { time: '3:00', price: 4185 },
  ];

  const sectorData = [
    { name: 'Tech', value: 400 },
    { name: 'Finance', value: 300 },
    { name: 'Energy', value: 300 },
    { name: 'Health', value: 200 },
    { name: 'Consumer', value: 100 },
    { name: 'Auto', value: 100 },
  ];
  const sectorColors = ['#00C49F', '#FFBB28', '#0088FE', '#FF8042', '#845EC2', '#4BC0C0'];

  // -------------------- Overview Stats --------------------
  const overviewCards = [
    {
      title: 'S&P 500', symbol: 'SPX', value: '4,185.47',
      change: '+12.34', percent: '+0.30%', changeColor: '#22c55e', direction: 'up',
      high: '4,195.22', low: '4,168.15', volume: '3.2B',
    },
    {
      title: 'NASDAQ', symbol: 'IXIC', value: '12,888.28',
      change: '-23.45', percent: '-0.18%', changeColor: '#ef4444', direction: 'down',
      high: '12,920.45', low: '12,866.33', volume: '4.1B',
    },
    {
      title: 'DOW JONES', symbol: 'DJI', value: '33,745.69',
      change: '+45.67', percent: '+0.14%', changeColor: '#22c55e', direction: 'up',
      high: '33,782.11', low: '33,689.65', volume: '415M',
    },
    {
      title: 'RUSSELL 2000', symbol: 'RUT', value: '1,789.12',
      change: '-8.90', percent: '-0.49%', changeColor: '#ef4444', direction: 'down',
      high: '1,801.23', low: '1,776.88', volume: '892M',
    },
  ];

  // =================== JSX Return ===================
  return (
    <>
      <Navbar />

      {/* ----------- Container ----------- */}
      <Box className="market-container">
        {/* Header */}
        <Typography variant="h2" className="market-heading">Markets Overview</Typography>
        <Typography variant="subtitle1" className="market-subtext">
          Real-time market data and comprehensive analysis
        </Typography>

        {/* Market Status Bar */}
        <Box className="status-bar">
          <Box className={`market-status ${marketOpen ? 'open' : 'closed'}`}>
            <span className="status-dot" />
            Market Status: {marketOpen ? 'Open' : 'Closed'}
            <span className="countdown">{countdown}</span>
          </Box>
          <Typography className="last-updated">
            Last updated: 2 min ago • Next close: 3:30 PM IST
          </Typography>
        </Box>


        {/* ----------- Overview Cards ----------- */}
        <Box className="overview-cards">
          {overviewCards.map((item) => (
            <Card key={item.title} className="overview-card">
              <CardContent>
                <Typography sx={{color:"#bdd1ec", fontSize:"0.7rem",paddingBottom:"1rem"}} variant="subtitle1" color="textSecondary">{item.title}</Typography>
                <Typography sx={{paddingBottom:"0.5rem"}} variant="h5">{item.value}</Typography>
                <Typography style={{ color: item.changeColor }}>
                  {item.change} ({item.percent})
                </Typography>
                <Typography sx={{}} variant="caption">
                  High: {item.high} • Low: {item.low} • Volume: {item.volume}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* ----------- Charts (Line & Pie) ----------- */}
        <Box className="overview-content">
          {/* Line Chart */}
          <Box className="chart-card">
            <Typography variant="h6" className="chart-title">S&P 500 Today</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineChartData}>
                <XAxis dataKey="time" />
                <YAxis domain={['dataMin', 'dataMax']} />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#00BFFF" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Pie Chart */}
          <Box className="sector-card">
            <Typography variant="h6" className="chart-title">Sector Performance</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={sectorData}
                  dataKey="value"
                  cx="50%" cy="50%"
                  outerRadius={60} innerRadius={30}
                >
                  {sectorData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={sectorColors[index % sectorColors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        {/* ----------- Market Stats ----------- */}
        <Box className="market-stats">
          <Box className="stat-card">
            <Typography variant="subtitle2">$45.2T</Typography>
            <Typography variant="caption">Total Market Cap</Typography>
          </Box>
          <Box className="stat-card">
            <Typography variant="subtitle2" color="success.main">2,847</Typography>
            <Typography variant="caption">Advancing</Typography>
          </Box>
          <Box className="stat-card">
            <Typography variant="subtitle2" color="error.main">1,432</Typography>
            <Typography variant="caption">Declining</Typography>
          </Box>
          <Box className="stat-card">
            <Typography variant="subtitle2">₹8.9B</Typography>
            <Typography variant="caption">Total Volume</Typography>
          </Box>
        </Box>
      </Box>

      {/* ----------- Stock Table ----------- */}
      <Box className="stock-market-section">
        <Typography variant="h6" sx={{ marginBottom: 2 ,marginTop:"0rem", paddingTop:"0rem", fontSize:"2rem", textAlign:"center", fontWeight:"500", paddingBottom:"2rem", }}>Stock Market</Typography>
        <Box className="stock-table">
          <Box className="table-header">
            <span>Symbol</span><span>Company</span><span>Sector</span><span>Price</span>
            <span>Change</span><span>% Change</span><span>High</span><span>Low</span>
            <span>Volume</span><span>Market Cap</span>
          </Box>

          {/* Hardcoded stocks – replace with API later */}
          {[
            {
              symbol: "AAPL", company: "Apple Inc.", sector: "Technology",
              price: 175.43, change: 2.34, percent: 1.35, high: 177.89,
              low: 173.12, volume: "58.2M", cap: "$2.8T"
            },
            {
              symbol: "MSFT", company: "Microsoft Corporation", sector: "Technology",
              price: 338.11, change: -1.23, percent: -0.36, high: 342.45,
              low: 336.78, volume: "32.1M", cap: "$2.5T"
            },
            {
              symbol: "GOOGL", company: "Alphabet Inc.", sector: "Technology",
              price: 125.89, change: 3.45, percent: 2.82, high: 128.22,
              low: 124.15, volume: "28.9M", cap: "$1.6T"
            },
            {
              symbol: "AMZN", company: "Amazon.com Inc.", sector: "Consumer Discretionary",
              price: 142.56, change: -0.89, percent: -0.62, high: 145.33,
              low: 141.22, volume: "41.7M", cap: "$1.5T"
            },
            {
              symbol: "TSLA", company: "Tesla Inc.", sector: "Consumer Discretionary",
              price: 208.78, change: 12.45, percent: 6.34, high: 212.45,
              low: 196.33, volume: "95.3M", cap: "$663B"
            },
            {
              symbol: "NVDA", company: "NVIDIA Corporation", sector: "Technology",
              price: 875.28, change: 18.45, percent: 2.15, high: 881.22,
              low: 856.78, volume: "42.1M", cap: "$2.2T"
            },
          ].map((stock) => (
            <Box key={stock.symbol} className="table-row">
              <span>{stock.symbol}</span>
              <span>{stock.company}</span>
              <span><span className="sector-tag">{stock.sector}</span></span>
              <span>${stock.price.toFixed(2)}</span>
              <span className={stock.change >= 0 ? "positive" : "negative"}>
                {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)}
              </span>
              <span className={stock.percent >= 0 ? "positive" : "negative"}>
                {stock.percent >= 0 ? "+" : ""}{stock.percent.toFixed(2)}%
              </span>
              <span>${stock.high}</span>
              <span>${stock.low}</span>
              <span>{stock.volume}</span>
              <span>{stock.cap}</span>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
}
