// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
  admNo: '',
  password: ''
});
 const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', credentials);
      const student = res.data.student;
      alert('Login successful');

      // ✅ Call parent handler
      if (onLogin) onLogin(student);

      // ✅ Navigate using student._id from backend
      navigate(`/student/${student._id}`);
    } catch (e) {
      alert('Login failed: ' + e.message);
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
