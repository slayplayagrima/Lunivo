# Lunivo – Investment Portfolio and Analysis Dashboard

Lunivo is a modern investment management dashboard that helps users track stocks, monitor portfolios, and make informed financial decisions using real-time market data.

**Frontend URL:** https://lunivo.vercel.app/  
**Backend URL:** https://lunivo.onrender.com/  
**Database (Supabase – PostgreSQL):** https://thuunlxmlgbmcdwmvqzb.supabase.co  

---

## 1. Project Title

**Lunivo – Investment Portfolio and Analysis Dashboard**

---

## 2. Problem Statement

Managing personal investments across multiple stocks and assets can be difficult without a centralized dashboard. Users often lack:

- Real-time price tracking  
- Portfolio performance insights  
- A unified view of their investments  
- Smart alerting and automation  

Lunivo solves this by providing a centralized, real-time dashboard powered by financial APIs and secure user authentication.

---

## 3. System Architecture

### Architecture Flow
```
Frontend (React.js)
        ↓
Backend (Node.js + Express)
        ↓
Database (Supabase PostgreSQL)
        ↓
External Financial APIs
```

### Technology Description

| Layer | Technology |
|-------|------------|
| Frontend | React.js, React Router, Material UI |
| Backend | Node.js, Express.js |
| Database | Supabase (PostgreSQL) |
| Authentication | JWT-based login and signup |
| Hosting | Vercel (Frontend), Render (Backend) |
| External APIs | FinancialModelingPrep / AlphaVantage |

---

## 4. Key Features

### Authentication and Authorization
- Secure JWT-based login and signup  
- User-specific data protection  

### Dashboard
- Real-time stock charts and prices  
- Portfolio performance metrics  
- Investment summaries  

### Portfolio Management (CRUD)
- Add investments  
- Edit investment details  
- Delete investments  
- Display updated values using live market data  

### Alerts and Notifications
- Custom price alerts  
- Notifications when price thresholds are reached  

### Responsive User Interface
- Fully responsive UI  
- Built using Material UI  

### External API Integration
- Live stock data retrieval  
- Market data visualization  

### AI / Analytics (Future Scope)
- Automated investment suggestions  
- AI-driven insights  
- Sentiment-based decision-making  

---

## 5. Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| Frontend | React.js, Material UI, Fetch API |
| Backend | Node.js, Express.js |
| Database | Supabase (PostgreSQL) |
| Authentication | JWT |
| Hosting | Vercel (Frontend), Render (Backend) |
| APIs | FinancialModelingPrep, AlphaVantage |

---

## 6. API Overview

### Authentication Routes

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/auth/signup` | POST | Register a new user | Public |
| `/auth/login` | POST | Authenticate a user and return JWT | Public |

---

### Investment Routes

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/investments` | GET | Fetch all investments for the authenticated user | Authenticated |
| `/investments` | POST | Add a new investment | Authenticated |
| `/investments/:id` | PUT | Update an existing investment | Authenticated |
| `/investments/:id` | DELETE | Delete an investment | Authenticated |

---

### Alert Routes

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/alerts` | POST | Create a price alert | Authenticated |

---

## 7. Future Scope

- AI-based investment advice and portfolio optimization  
- Market news sentiment analysis  
- Voice assistant using OpenAI APIs  
- Support for additional asset classes (crypto, ETFs, mutual funds)  
- Risk modeling and predictive analytics  

---

## 8. Deployment Links

| Service | URL |
|---------|-----|
| Frontend (Vercel) | https://lunivo.vercel.app/ |
| Backend (Render) | https://lunivo.onrender.com/ |
| Supabase Database | https://thuunlxmlgbmcdwmvqzb.supabase.co |
