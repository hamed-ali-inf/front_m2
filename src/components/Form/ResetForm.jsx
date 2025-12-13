import "./ResetForm.css";
export function ResetForm() {   
    return (
        <form className="reset-form">
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <button type="submit">Send Reset Link</button>
        </form>
    );
}
