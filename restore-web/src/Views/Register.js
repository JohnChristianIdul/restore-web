import React, { useState } from 'react';
import '../Styles/Register.css'// Create a corresponding CSS file for styling

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    // Handle register logic here
    console.log('Register with:', firstName, lastName, username, phoneNumber, email, password);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <img src="brand-logo.png" alt="Brand Logo" className="brand-logo" /> {/* Replace with actual logo */}
        <h2>Sign Up</h2>
        <h4>Already have an account?</h4>
        <div className="log-in-link">
          <a href="#" className="login-link">Log in</a>
        </div>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
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
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
};

export default Register;
