import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Button, Dialog, DialogTitle, DialogContent,
  DialogActions, MenuItem, Select, TextField,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const pieData = [
  { name: 'Stocks', value: 60 },
  { name: 'Mutual Funds', value: 20 },
  { name: 'Bonds', value: 15 },
  { name: 'Cash', value: 5 },
];

const COLORS = ['#00B0FF', '#AA55FF', '#00E676', '#FF6D00'];

const initialHoldings = [
  { symbol: 'AAPL', name: 'Apple Inc.', type: 'Stock', quantity: 25, avgPrice: 184.92, currentPrice: 187.45 },
  { symbol: 'VTSAX', name: 'Vanguard Total Stock Market', type: 'Mutual Fund', quantity: 100, avgPrice: 104.5, currentPrice: 106.23 },
  { symbol: 'BTC', name: 'Bitcoin', type: 'Crypto', quantity: 0.34, avgPrice: 42384.25, currentPrice: 44125.5, alert: true },
  { symbol: 'AGG', name: 'iShares Core US Aggregate Bond ETF', type: 'Bond', quantity: 50, avgPrice: 103.25, currentPrice: 102.18 },
];

function Dashboard() {
  const [holdings, setHoldings] = useState(initialHoldings);
  const [lineData, setLineData] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [newInvestment, setNewInvestment] = useState({ symbol: '', type: 'Stock', quantity: '', purchasePrice: '' });
  const [alert, setAlert] = useState({ symbol: '', direction: 'Above', price: '' });

  useEffect(() => {
    const fetchIntraday = async () => {
      try {
        const res = await fetch(
          'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=7A310Q55BFZ460SN'
        );
        const json = await res.json();
        const ts = json['Time Series (5min)'];
        if (!ts) return;

        const data = Object.entries(ts).map(([time, tick]) => ({
          time,
          value: parseFloat(tick['4. close'])
        })).reverse();

        setLineData(data.slice(0, 20));
      } catch (e) {
        console.error('API fetch error', e);
      }
    };

    fetchIntraday();
  }, []);

  const handleAddInvestment = () => {
    const inv = {
      symbol: newInvestment.symbol,
      name: newInvestment.symbol,
      type: newInvestment.type,
      quantity: parseFloat(newInvestment.quantity),
      avgPrice: parseFloat(newInvestment.purchasePrice),
      currentPrice: parseFloat(newInvestment.purchasePrice),
    };
    setHoldings([...holdings, inv]);
    setNewInvestment({ symbol: '', type: 'Stock', quantity: '', purchasePrice: '' });
    setAddOpen(false);
  };

  const handleRemove = symbol => setHoldings(holdings.filter(h => h.symbol !== symbol));

  return (
    <>
      <Navbar />
      <div className="dashboard">

        {/* Header */}
        <div className="header">
          <div>Investment Dashboard</div>
          <p>Track and manage your investment performance across stocks, mutual funds, and bonds with real-time analytics</p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-box">
            <h3>$35,020.92</h3>
            <p>Total Portfolio Value</p>
            <span className="green">↑ +1.08% (+$374.78)</span>
          </div>
          <div className="stat-box">
            <h3>$24,248.72</h3>
            <p>Market Value</p>
            <span className="green">↑ +0.38% today</span>
          </div>
          <div className="stat-box">
            <h3>4</h3>
            <p>Active Investments</p>
            <small>1 with alerts</small>
          </div>
          <div className="stat-box">
            <h3>-0.80%</h3>
            <p>Week Change</p>
            <small>7-day performance</small>
          </div>
        </div>

        {/* Charts */}
        <div className="charts-section">
          <div className="chart-card">
            <h4>Real‑Time Market Performance</h4>
            {lineData.length ? (
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                  <YAxis domain={['auto', 'auto']} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#00B0FF" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p style={{ textAlign: 'center', color: '#94a3b8' }}>Loading real-time data...</p>
            )}
          </div>

          <div className="chart-card">
            <h4>Asset Allocation</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((e, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <Button onClick={() => setAlertOpen(true)} variant="outlined" className="alert-btn">Price Alerts</Button>
          <Button onClick={() => setAddOpen(true)} variant="contained" className="add-btn">+ Add Investment</Button>
        </div>

        {/* Holdings Table */}
        <div className="holdings-table">
          <h3>Current Holdings</h3>
          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Avg Price</th>
                <th>Current Price</th>
                <th>Value</th>
                <th>Return</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h, i) => {
                const val = (h.currentPrice * h.quantity).toFixed(2);
                const pct = (((h.currentPrice - h.avgPrice) / h.avgPrice) * 100).toFixed(2);
                return (
                  <tr key={i}>
                    <td>{h.symbol}{h.alert && <span className="alert-tag">Alert</span>}</td>
                    <td>{h.type}</td>
                    <td>{h.quantity}</td>
                    <td>${h.avgPrice}</td>
                    <td>${h.currentPrice}</td>
                    <td>${val}</td>
                    <td className={pct >= 0 ? 'green' : 'red'}>{pct}%</td>
                    <td>
                      <Button size="small" variant="outlined" color="error" className="remove-btn" onClick={() => handleRemove(h.symbol)}>Remove</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <Link to="/portfolio">
              <Button variant="outlined" color="primary" className="portfolio-btn">View Full Portfolio</Button>
            </Link>
          </div>
        </div>

        {/* Add Dialog */}
        <Dialog PaperProps={{
          sx: {
            backgroundColor: '#061527',
            color: 'white',
            borderRadius: 2,
            minWidth: 400,
            p: 2
          }
        }} className="dialog-box" open={addOpen} onClose={() => setAddOpen(false)}>
          <DialogTitle>
            Add New Investment
            <IconButton onClick={() => setAddOpen(false)} className="close-btn"><CloseIcon /></IconButton>
          </DialogTitle>
          <DialogContent>
            <TextField fullWidth label="Symbol" margin="dense" value={newInvestment.symbol} onChange={e => setNewInvestment({ ...newInvestment, symbol: e.target.value })}
              sx={inputStyles} />
            <Select fullWidth margin="dense" value={newInvestment.type} onChange={e => setNewInvestment({ ...newInvestment, type: e.target.value })} displayEmpty
              sx={selectStyles} MenuProps={menuStyles}>
              <MenuItem value="Stock">Stock</MenuItem>
              <MenuItem value="Mutual Fund">Mutual Fund</MenuItem>
              <MenuItem value="Bond">Bond</MenuItem>
              <MenuItem value="Crypto">Crypto</MenuItem>
            </Select>
            <TextField fullWidth label="Quantity" type="number" margin="dense" value={newInvestment.quantity} onChange={e => setNewInvestment({ ...newInvestment, quantity: e.target.value })}
              sx={inputStyles} />
            <TextField fullWidth label="Purchase Price" type="number" margin="dense" value={newInvestment.purchasePrice} onChange={e => setNewInvestment({ ...newInvestment, purchasePrice: e.target.value })}
              sx={inputStyles} />
          </DialogContent>
          <DialogActions>
            <Button sx={{ backgroundColor: "hsl(204, 88%, 66%)" }} variant="contained" onClick={handleAddInvestment}>Add Investment</Button>
          </DialogActions>
        </Dialog>

        {/* Alert Dialog */}
        <Dialog PaperProps={{
          sx: {
            backgroundColor: '#061527',
            color: 'white',
            borderRadius: 2,
            minWidth: 400,
            p: 2
          }
        }} className="dialog-box" open={alertOpen} onClose={() => setAlertOpen(false)}>
          <DialogTitle>
            Set Price Alert
            <IconButton onClick={() => setAlertOpen(false)} className="close-btn"><CloseIcon /></IconButton>
          </DialogTitle>
          <DialogContent>
            <TextField fullWidth label="Asset Symbol" margin="dense" value={alert.symbol} onChange={e => setAlert({ ...alert, symbol: e.target.value })} sx={inputStyles} />
            <Select fullWidth margin="dense" value={alert.direction} onChange={e => setAlert({ ...alert, direction: e.target.value })} sx={selectStyles} MenuProps={menuStyles}>
              <MenuItem value="Above">Above</MenuItem>
              <MenuItem value="Below">Below</MenuItem>
            </Select>
            <TextField fullWidth label="Target Price" type="number" margin="dense" value={alert.price} onChange={e => setAlert({ ...alert, price: e.target.value })} sx={inputStyles} />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => {
              setHoldings(holdings.map(h => h.symbol === alert.symbol ? { ...h, alert: true } : h));
              setAlertOpen(false);
            }}>Set Alert</Button>
          </DialogActions>
        </Dialog>

      </div>
      <Footer />
    </>
  );
}

const inputStyles = {
  '& label': { color: '#bdd1ec' },
  '& label.Mui-focused': { color: 'hsl(204, 88%, 66%)' },
  '& .MuiInputBase-root': {
    color: 'white',
    '&:hover fieldset': { borderColor: 'hsl(204, 88%, 66%)' },
    '& fieldset': { borderColor: '#bdd1ec' }
  }
};

const selectStyles = {
  color: "#bdd1ec",
  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'hsl(204, 88%, 66%)' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'hsl(204, 88%, 66%)' },
  '& .MuiSelect-icon': { color: '#bdd1ec' }
};

const menuStyles = {
  PaperProps: {
    sx: {
      backgroundColor: '#061527',
      color: '#bdd1ec'
    }
  }
};

export default Dashboard;
