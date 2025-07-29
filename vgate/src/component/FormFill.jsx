// src/components/FormFill.jsx
import React, { useState } from 'react';
import axios from 'axios';

function FormFill({ studentId }) {
  const [form, setForm] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:5000/form-fill/${studentId}`, form);
      alert('Form submitted');
    } catch {
      alert('Form submission failed');
    }
  };

  return (
    <div>
      <h3>Gate Pass Form</h3>
      <input name="purpose" placeholder="Purpose" onChange={handleChange} /><br />
      <input type="date" name="date" onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormFill;
