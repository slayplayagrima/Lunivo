import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Eye, EyeOff, LogIn, User, Mail } from 'lucide-react';
import "../styles/Signup.css"

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    console.log({ firstName, lastName, email, password, agreeToTerms });
    alert('Account created (demo)');
  };

  return (
    <div className="signup-page">
      <div className="signup-logo">
        <Link to="/" className="logo-link">
          <img src="src/assets/logo.png" className="logo-icon" />
        </Link>
      </div>

      <div className="signup-card">
        <div className="signup-header">
          <h2>Create your account</h2>
          <p>Join thousands of investors tracking their wealth with Lunivo</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <User className="input-icon" />
              <input style={{}}
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <User className="input-icon" />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <Mail className="input-icon" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <LogIn className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="input-group">
            <LogIn className="input-icon" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <label>
              I agree to the{' '}
              <Link to="/terms" className="link">Terms of Service</Link> and{' '}
              <Link to="/privacy" className="link">Privacy Policy</Link>.
            </label>
          </div>

          <button type="submit" className="submit-btn">Create Account</button>
        </form>

        <div className="signin-link">
          Already have an account?{' '}
          <Link to="/login" className="link">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
