import React, { useState } from 'react';
import '../Styles/Login.css' // Make sure to create a corresponding CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Login with:', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="brand-logo.png" alt="Brand Logo" className="brand-logo" /> {/* Replace with actual logo */}
        <h2>Hello</h2>
        <h4>Don't have an account yet?</h4>
        <div className="sign-up-link">
          <a href="#" className="signup-link">Sign Up</a>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit">Login</button>
      </div>
    </div>
  );
};

export default Login;
