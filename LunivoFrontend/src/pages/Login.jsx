import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn, User } from 'lucide-react';
import "../styles/Login.css";


// Login Component
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        console.log("Login data:", data);

        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert("Login failed: " + data.message);
      }
    }
    catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="login-container">
      {/* Logo */}
      <div className="login-logo">
        <Link to="/" className="logo-link">
          <img src="src/assets/logo.png" className="logo-icon" />
        </Link>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <h2 className="login-title">Login to your account</h2>
        <p className="login-subtitle">Enter your email and password to access your dashboard</p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <LogIn className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="form-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">Login</button>

          {/* Sign Up Redirect */}
          <div className="signup-text">
            Don’t have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
