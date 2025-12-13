import './RegisterPage.css';
import { Link } from "react-router-dom";   // استيراد Link
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const navigate = useNavigate();
  
  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      
        <p>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blue", cursor: "pointer" }}>
            Login
          </Link>
        </p>
         <button 
              className="tab" 
              onClick={() => navigate("/home")}
            >
              Back to Home
            </button>
      </div>
    </div>
  );
}
