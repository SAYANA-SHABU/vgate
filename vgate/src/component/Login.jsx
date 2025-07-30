// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
  admNo: '',
  password: ''
});

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', credentials);
      alert('Login successful');
      onLogin(res.data.student);
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <input type="text" name="admNo" placeholder="Admission No" onChange={handleChange} /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
