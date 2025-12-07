import './RegisterPage.css';
export function RegisterPage() {
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
        <p>Already have an account? <a href="/auth">Login</a></p>
      </div>
    </div>
  );

}