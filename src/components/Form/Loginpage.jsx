import React from "react";
import "./Loginpage.css";   
import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="card">
        <header className="card-top">
          <div className="search-brand">
            
            <svg className="magnifier" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle
                cx="11"
                cy="11"
                r="5"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
              />
            </svg>
            <h1 className="title">Search web</h1>
          </div>

          <div className="tabs">
            <button 
              className="tab active" 
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button 
              className="tab" 
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </div>
        </header>

        <form className="form">
          <label className="input-card">
            <input type="email" required placeholder=" " />
            <span className="placeholder">Email address</span>
          </label>

          <label className="input-card">
            <input type="password" required placeholder=" " />
            <span className="placeholder">Password</span>
          </label>

          <div className="forgot">Forgot password?</div>
        </form>
      </div>

      <footer className="footer">
        <button 
          className="login-btn" 
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <div className="signup-line">
          Don't have an account?{" "}
          <span 
            className="signup-link" 
            onClick={() => navigate("/register")}
            style={{cursor: "pointer", color: "blue"}}
          >
            Sign up
          </span>
        </div>
      </footer>
    </div>
  );
}

