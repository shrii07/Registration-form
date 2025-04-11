
import { Link } from "react-router-dom";
import "../styles.css"; 

export default function AuthForm({ isSignUp }) {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{isSignUp ? "Sign Up" : "Login"}</h2>

        <form>
          {isSignUp && <InputField label="Full Name" type="text" placeholder="John Doe" />}
          <InputField label="Email" type="email" placeholder="example@mail.com" />
          <InputField label="Password" type="password" placeholder="******" />

          <button className="auth-button">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>

        <p className="auth-link">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <Link to={isSignUp ? "/login" : "/signup"}>{isSignUp ? "Login" : "Sign Up"}</Link>
        </p>
      </div>
    </div>
  );
}

function InputField({ label, type, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className="auth-input" required />
    </div>
  );
}
