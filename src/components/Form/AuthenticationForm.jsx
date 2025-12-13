import './AuthenticationForm.css'
export function AuthenticationForm() {
    return (
        <form className="authentication-form">
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
            <br />
             <button 
                type="button" 
                onClick={() => navigate('/register')}
                
            >
                <a href="/register">Register</a>
            </button>
            
            <a href="/rest">Forgot Password?</a>
        </form>
    );
}
