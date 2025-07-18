import React, { useState } from 'react';
import '../styles/Dashboard.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  TextField,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LineChart, Line, PieChart, Pie, Cell, Tooltip } from 'recharts';

// ------------------------------
// Mock Chart Data
// ------------------------------
const pieData = [
  { name: 'Stocks', value: 60 },
  { name: 'Mutual Funds', value: 20 },
  { name: 'Bonds', value: 15 },
  { name: 'Cash', value: 5 },
];

const COLORS = ['#00B0FF', '#AA55FF', '#00E676', '#FF6D00'];

const lineData = Array.from({ length: 20 }, (_, i) => ({
  time: i,
  value: 50 + Math.random() * 50,
}));

// ------------------------------
// Initial Holdings
// ------------------------------
const initialHoldings = [
  { symbol: 'AAPL', name: 'Apple Inc.', type: 'Stock', quantity: 25, avgPrice: 184.92, currentPrice: 187.45 },
  { symbol: 'VTSAX', name: 'Vanguard Total Stock Market', type: 'Mutual Fund', quantity: 100, avgPrice: 104.5, currentPrice: 106.23 },
  { symbol: 'BTC', name: 'Bitcoin', type: 'Crypto', quantity: 0.34, avgPrice: 42384.25, currentPrice: 44125.5, alert: true },
  { symbol: 'AGG', name: 'iShares Core US Aggregate Bond ETF', type: 'Bond', quantity: 50, avgPrice: 103.25, currentPrice: 102.18 },
];

function Dashboard() {
  // ------------------------------
  // State
  // ------------------------------
  const [holdings, setHoldings] = useState(initialHoldings);
  const [addOpen, setAddOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [newInvestment, setNewInvestment] = useState({ symbol: '', type: 'Stock', quantity: '', purchasePrice: '' });
  const [alert, setAlert] = useState({ symbol: '', direction: 'Above', price: '' });

  // ------------------------------
  // Handlers
  // ------------------------------
  const handleAddInvestment = () => {
    const investment = {
      symbol: newInvestment.symbol,
      name: newInvestment.symbol,
      type: newInvestment.type,
      quantity: parseFloat(newInvestment.quantity),
      avgPrice: parseFloat(newInvestment.purchasePrice),
      currentPrice: parseFloat(newInvestment.purchasePrice),
    };
    setHoldings([...holdings, investment]);
    setNewInvestment({ symbol: '', type: 'Stock', quantity: '', purchasePrice: '' });
    setAddOpen(false);
  };

  const handleRemove = (symbol) => {
    setHoldings(holdings.filter((h) => h.symbol !== symbol));
  };

  return (
    < >
    <Navbar/>
    <div className="dashboard">
      {/* ------------------------------ Header ------------------------------ */}
      <div className="header">
        <div>Investment Dashboard</div>
        <p>Track and manage your investment performance across stocks, mutual funds, and bonds with real-time analytics</p>
      </div>

      {/* ------------------------------ Stat Summary ------------------------------ */}
      <div className="stats-grid">
        <div className="stat-box">
          <h3>$35,020.92</h3>
          <p>Total Portfolio Value</p>
          <span className="green">↑ +1.08% (+$374.775)</span>
        </div>
        <div className="stat-box">
          <h3>$24,248.716</h3>
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

      {/* ------------------------------ Charts Section ------------------------------ */}
      <div className="charts-section">
        <div className="chart-card">
          <h4>Real-Time Market Performance</h4>
          <LineChart width={500} height={200} data={lineData}>
            <Line type="monotone" dataKey="value" stroke="#00B0FF" strokeWidth={2} dot={false} />
          </LineChart>
        </div>
        <div className="chart-card">
          <h4>Asset Allocation</h4>
          <PieChart width={250} height={250}>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      {/* ------------------------------ Action Buttons ------------------------------ */}
      <div className="actions">
        <Button onClick={() => setAlertOpen(true)} variant="outlined" className="alert-btn">Price Alerts</Button>
        <Button onClick={() => setAddOpen(true)} variant="contained" className="add-btn">+ Add Investment</Button>
      </div>

      {/* ------------------------------ Holdings Table ------------------------------ */}
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
              const value = (h.currentPrice * h.quantity).toFixed(2);
              const returnPct = (((h.currentPrice - h.avgPrice) / h.avgPrice) * 100).toFixed(2);
              return (
                <tr key={i}>
                  <td>{h.symbol} {h.alert && <span className="alert-tag">Alert</span>}</td>
                  <td>{h.type}</td>
                  <td>{h.quantity}</td>
                  <td>${h.avgPrice}</td>
                  <td>${h.currentPrice}</td>
                  <td>${value}</td>
                  <td className={returnPct >= 0 ? 'green' : 'red'}>{returnPct}%</td>
                  <td>
                    <Button className="remove-btn" size="small" variant="outlined" color="error" onClick={() => handleRemove(h.symbol)}>Remove</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* View Portfolio Button */}
        <div  style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button className='portfolio-btn' variant="outlined" color="primary">View Full Portfolio</Button>
        </div>
      </div>

      {/* ------------------------------ Add Investment Dialog ------------------------------ */}
      <Dialog open={addOpen} onClose={() => setAddOpen(false)}>
        <DialogTitle>
          Add New Investment
          <IconButton onClick={() => setAddOpen(false)} className="close-btn"><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Symbol (e.g., AAPL)"
            value={newInvestment.symbol}
            onChange={(e) => setNewInvestment({ ...newInvestment, symbol: e.target.value })} />
          <Select fullWidth margin="dense" value={newInvestment.type}
            onChange={(e) => setNewInvestment({ ...newInvestment, type: e.target.value })}>
            <MenuItem value="Stock">Stock</MenuItem>
            <MenuItem value="Mutual Fund">Mutual Fund</MenuItem>
            <MenuItem value="Bond">Bond</MenuItem>
            <MenuItem value="Crypto">Crypto</MenuItem>
          </Select>
          <TextField fullWidth margin="dense" label="Quantity" type="number"
            value={newInvestment.quantity}
            onChange={(e) => setNewInvestment({ ...newInvestment, quantity: e.target.value })} />
          <TextField fullWidth margin="dense" label="Purchase Price" type="number"
            value={newInvestment.purchasePrice}
            onChange={(e) => setNewInvestment({ ...newInvestment, purchasePrice: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleAddInvestment}>Add Investment</Button>
        </DialogActions>
      </Dialog>

      {/* ------------------------------ Price Alert Dialog ------------------------------ */}
      <Dialog open={alertOpen} onClose={() => setAlertOpen(false)}>
        <DialogTitle>
          Set Price Alert
          <IconButton onClick={() => setAlertOpen(false)} className="close-btn"><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Asset Symbol (e.g., AAPL)" value={alert.symbol}
            onChange={(e) => setAlert({ ...alert, symbol: e.target.value })} margin="dense" />
          <Select fullWidth value={alert.direction}
            onChange={(e) => setAlert({ ...alert, direction: e.target.value })} margin="dense">
            <MenuItem value="Above">Above</MenuItem>
            <MenuItem value="Below">Below</MenuItem>
          </Select>
          <TextField fullWidth label="Target Price" type="number" value={alert.price}
            onChange={(e) => setAlert({ ...alert, price: e.target.value })} margin="dense" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => {
            setHoldings(holdings.map(h => h.symbol === alert.symbol ? { ...h, alert: true } : h));
            setAlertOpen(false);
          }}>Set Alert</Button>
        </DialogActions>
      </Dialog>
    </div>
    <Footer/>
    </>
  );
}

export default Dashboard;
