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

function Dashboard() {
  const [holdings, setHoldings] = useState([]);
  const [alerts, setAlerts] = useState([]); // ⭐ ALERT STATE
  const [lineData, setLineData] = useState([]);
  const [addOpen, setAddOpen] = useState(false);

  const [newInvestment, setNewInvestment] = useState({
    symbol: '',
    type: 'Stock',
    quantity: '',
    buyPrice: ''
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const [alert, setAlert] = useState({ symbol: '', direction: '', price: '' });

  // ⭐ Fetch investments + alerts + intraday
  useEffect(() => { 
    fetchInvestments(); 
    fetchAlerts();
    fetchIntraday(); 
  }, []);

  // ⭐ FETCH INVESTMENTS
  const fetchInvestments = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("https://lunivo.onrender.com/api/investments", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.ok) setHoldings(data.investments);
    } catch (err) { console.error("Error fetching investments:", err); }
  };

  // ⭐ FETCH ALERTS
  const fetchAlerts = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("https://lunivo.onrender.com/api/alerts", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.ok) setAlerts(data.alerts);
    } catch (err) { console.error("Error fetching alerts:", err); }
  };

  // ⭐ FETCH REAL-TIME CHART
  const fetchIntraday = async () => {
    try {
      const res = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=7A310Q55BFZ460SN"
      );
      const json = await res.json();
      const ts = json["Time Series (5min)"];
      if (!ts) return;

      const data = Object.entries(ts)
        .map(([time, tick]) => ({
          time,
          value: parseFloat(tick["4. close"]),
        }))
        .reverse();

      setLineData(data.slice(0, 20));
    } catch (e) { console.error("API fetch error", e); }
  };

  // ⭐ ADD INVESTMENT
  const handleAddInvestment = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("https://lunivo.onrender.com/api/investments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          symbol: newInvestment.symbol,
          type: newInvestment.type,
          quantity: Number(newInvestment.quantity),
          buyPrice: Number(newInvestment.buyPrice),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Investment added!");
        fetchInvestments();
        setAddOpen(false);
        setNewInvestment({
          symbol: "",
          type: "Stock",
          quantity: "",
          buyPrice: "",
        });
      } else alert(data.message);

    } catch (err) { console.error("Add error:", err); }
  };

  // ⭐ REMOVE INVESTMENT
  const handleRemove = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`https://lunivo.onrender.com/api/investments/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) setHoldings(holdings.filter((h) => h.id !== id));
    } catch (err) { console.error("Delete error:", err); }
  };

  // ⭐ SET NEW PRICE ALERT
  const handleSetAlert = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("https://lunivo.onrender.com/api/alerts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          symbol: alert.symbol,
          direction: alert.direction,
          targetPrice: Number(alert.price),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Price alert added!");
        fetchAlerts();
        setAlertOpen(false);
        setAlert({ symbol: "", direction: "", price: "" });
      } else alert(data.message);

    } catch (err) { console.error("ALERT ERROR:", err); }
  };

  // ⭐ GET ALERT ARROW FOR HOLDINGS
  const getAlertArrow = (symbol) => {
    const found = alerts.find(a => a.symbol.toUpperCase() === symbol.toUpperCase());
    if (!found) return "-";

    return (
      <span style={{
        color: found.direction === "Above" ? "limegreen" : "red",
        fontSize: "20px",
        fontWeight: "bold"
      }}>
        {found.direction === "Above" ? "↑" : "↓"}
      </span>
    );
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">

        {/* HEADER */}
        <div className="header">
          <div>Investment Dashboard</div>
          <p>Track and manage your investment performance across assets</p>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-box">
            <h3>$35,020.92</h3>
            <p>Total Portfolio Value</p>
            <span className="green">↑ +1.08%</span>
          </div>
          <div className="stat-box">
            <h3>$24,248.72</h3>
            <p>Market Value</p>
            <span className="green">↑ +0.38% today</span>
          </div>
          <div className="stat-box">
            <h3>{holdings.length}</h3>
            <p>Active Investments</p>
            <small>{alerts.length} alerts active</small>
          </div>
          <div className="stat-box">
            <h3>-0.80%</h3>
            <p>Week Change</p>
            <small>7-day performance</small>
          </div>
        </div>

        {/* CHARTS */}
        <div className="charts-section">
          <div className="chart-card">
            <h4>Real-Time Market Performance</h4>
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
              <p style={{ textAlign: 'center', color: '#94a3b8' }}>Loading...</p>
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

        {/* ACTION BUTTONS */}
        <div className="actions">
          <Button onClick={() => setAlertOpen(true)} variant="outlined" className="alert-btn">Price Alerts</Button>
          <Button onClick={() => setAddOpen(true)} variant="contained" className="add-btn">+ Add Investment</Button>
        </div>

        {/* HOLDINGS TABLE */}
        <div className="holdings-table">
          <h3>Current Holdings</h3>

          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Avg Price</th>
                <th>Current Price</th>
                <th>Value</th>
                <th>Return</th>
                <th>Alert</th> {/* ⭐ NEW COLUMN */}
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {holdings.map((h) => {
                const currentPrice = h.buyPrice;
                const avgPrice = h.buyPrice;
                const val = (currentPrice * h.quantity).toFixed(2);
                const pct = (((currentPrice - avgPrice) / avgPrice) * 100).toFixed(2);

                return (
                  <tr key={h.id}>
                    <td>{h.symbol}</td>
                    <td>{h.type}</td>
                    <td>{h.quantity}</td>
                    <td>${avgPrice}</td>
                    <td>${currentPrice}</td>
                    <td>${val}</td>
                    <td className={pct >= 0 ? "green" : "red"}>{pct}%</td>

                    {/* ⭐ ALERT ARROW DISPLAY */}
                    <td>{getAlertArrow(h.symbol)}</td>

                    <td>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemove(h.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* ADD INVESTMENT DIALOG */}
        <Dialog PaperProps={{
          sx: { backgroundColor: '#061527', color: 'white', borderRadius: 2, minWidth: 400, p: 2 }
        }} open={addOpen} onClose={() => setAddOpen(false)}>
          <DialogTitle>
            Add New Investment
            <IconButton onClick={() => setAddOpen(false)} className="close-btn"><CloseIcon /></IconButton>
          </DialogTitle>

          <DialogContent>
            <TextField fullWidth label="Symbol" margin="dense"
              value={newInvestment.symbol}
              onChange={e => setNewInvestment({ ...newInvestment, symbol: e.target.value })}
              sx={inputStyles}
            />

            <Select fullWidth margin="dense"
              value={newInvestment.type}
              onChange={e => setNewInvestment({ ...newInvestment, type: e.target.value })}
              sx={selectStyles} MenuProps={menuStyles}
            >
              <MenuItem value="Stock">Stock</MenuItem>
              <MenuItem value="Mutual Fund">Mutual Fund</MenuItem>
              <MenuItem value="Bond">Bond</MenuItem>
              <MenuItem value="Crypto">Crypto</MenuItem>
            </Select>

            <TextField fullWidth label="Quantity" type="number" margin="dense"
              value={newInvestment.quantity}
              onChange={e => setNewInvestment({ ...newInvestment, quantity: e.target.value })}
              sx={inputStyles}
            />

            <TextField fullWidth label="Purchase Price" type="number" margin="dense"
              value={newInvestment.buyPrice}
              onChange={e => setNewInvestment({ ...newInvestment, buyPrice: e.target.value })}
              sx={inputStyles}
            />
          </DialogContent>

          <DialogActions>
            <Button sx={{ backgroundColor: "hsl(204, 88%, 66%)" }}
              variant="contained"
              onClick={handleAddInvestment}
            >
              Add Investment
            </Button>
          </DialogActions>
        </Dialog>

        {/* ALERT DIALOG */}
        <Dialog PaperProps={{
          sx: { backgroundColor: '#061527', color: 'white', borderRadius: 2, minWidth: 400, p: 2 }
        }} open={alertOpen} onClose={() => setAlertOpen(false)}>
          <DialogTitle>
            Set Price Alert
            <IconButton onClick={() => setAlertOpen(false)} className="close-btn">
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <TextField fullWidth label="Asset Symbol" margin="dense"
              value={alert.symbol}
              onChange={e => setAlert({ ...alert, symbol: e.target.value })}
              sx={inputStyles}
            />

            <Select fullWidth margin="dense"
              value={alert.direction}
              onChange={e => setAlert({ ...alert, direction: e.target.value })}
              sx={selectStyles} MenuProps={menuStyles}
            >
              <MenuItem value="Above">Above</MenuItem>
              <MenuItem value="Below">Below</MenuItem>
            </Select>

            <TextField fullWidth label="Target Price" type="number" margin="dense"
              value={alert.price}
              onChange={e => setAlert({ ...alert, price: e.target.value })}
              sx={inputStyles}
            />
          </DialogContent>

          <DialogActions>
            <Button variant="contained" onClick={handleSetAlert}>
              Set Alert
            </Button>
          </DialogActions>
        </Dialog>

      </div>
      <Footer />
    </>
  );
}

// INPUT STYLES
const inputStyles = {
  '& label': { color: '#bdd1ec' },
  '& label.Mui-focused': { color: 'hsl(204, 88%, 66%)' },
  '& .MuiInputBase-root': {
    color: 'white',
    '&:hover fieldset': { borderColor: 'hsl(204, 88%, 66%)' },
    '& fieldset': { borderColor: '#bdd1ec' }
  }
};

// SELECT DROPDOWN STYLES
const selectStyles = {
  color: "#bdd1ec",
  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'hsl(204, 88%, 66%)' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'hsl(204, 88%, 66%)' },
  '& .MuiSelect-icon': { color: '#bdd1ec' }
};

// MENU STYLES
const menuStyles = {
  PaperProps: {
    sx: {
      backgroundColor: '#061527',
      color: '#bdd1ec'
    }
  }
};

export default Dashboard;
