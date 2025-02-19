import "../css/login.css";

export default function LoginPage() {
    return (
        <div className="login-form-container">
            <h2 className="login-header">Log In</h2>
            <form className="login-form">
                <label>
                    username:{" "}
                    <input className="login-input" type="text" required />
                </label>
                <label>
                    password: <input className="login-input" type="text" />
                </label>
                <button className="login-button">Submit</button>
            </form>
        </div>
    );
}
