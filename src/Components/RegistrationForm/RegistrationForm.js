import React from "react";
import {useState} from "react";
import './RegistrationForm.css';

function RegistrationForm (){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setTimeout(() => {
        setIsRegistered(true);
      }, 1000);
    };
  
    return (
      <div className="registration-container">
        <h2 className="registration-title">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
        {isRegistered && (
          <div className="success-message">
            <p>Registration successful! Welcome, {username}!</p>
          </div>
        )}
      </div>
    );
}

export default RegistrationForm;