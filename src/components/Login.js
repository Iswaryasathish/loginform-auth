import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

function Login({ setAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://loginform-server.onrender.com/login', { email, password });
      if (response.data.success) {
        setAuthenticated(true);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
