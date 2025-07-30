import React, { useState, useMemo } from 'react';
import './RegisterForm.css';
import axios from 'axios';

const RegisterForm = () => {
  const departments = [
    "BA Malayalam Language & Literature", "BA English Language & Literature", "BA Functional English", 
    "BA Economics", "BA Sociology", "B.Com", "B.Sc Mathematics", "B.Sc Statistics", "B.Sc Chemistry", 
    "B.Sc Botany", "B.Sc Zoology", "B.Sc Family & Community Science", "Bsc Computer Science", 
    "Bsc Physics", "B.Com(self)", "B.Sc Home Science (Textiles & Fashion Technology)", "B.Sc Psychology", 
    "B.Voc Web Technology", "B.Voc Food Processing ", "MA English", "MA Economics", "MA Malayalam", 
    "MA Sociology", "M.Com", "MSW", "M.Sc Physics", "M.Sc Zoology", "M.Sc Chemistry", "M.Sc Botany", 
    "M.Sc Mathematics", "M.Sc Statistics", "M.Sc Computer Science"
  ];

  const [formData, setFormData] = useState({
    admNo: '',
    name: '',
    dept: '',
    sem: '',
    tutorName: '',
    phone: '',
    email: '',
    password: '',
    image: null,
  });

  const [departmentInput, setDepartmentInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validatePassword = (password) => {
    const minLength = 6;
    const hasCapital = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return 'Password must be at least 6 characters long';
    }
    if (!hasCapital) {
      return 'Password must contain at least one capital letter';
    }
    if (!hasNumber) {
      return 'Password must contain at least one number';
    }
    if (!hasSpecialChar) {
      return 'Password must contain at least one special character';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const filteredDepartments = useMemo(() => {
    if (!departmentInput) return departments;
    
    const inputLower = departmentInput.toLowerCase();
    
    return departments
      .map(dept => ({
        dept,
        index: dept.toLowerCase().indexOf(inputLower)
      }))
      .filter(({ index }) => index !== -1)
      .sort((a, b) => {
        if (a.index === 0 && b.index !== 0) return -1;
        if (b.index === 0 && a.index !== 0) return 1;
        if (a.index !== b.index) return a.index - b.index;
        return a.dept.localeCompare(b.dept);
      })
      .map(({ dept }) => dept);
  }, [departmentInput, departments]);

  const tutors = [
    "Dr. Smith",
    "Prof. Johnson",
    "Dr. Williams",
    "Prof. Brown",
    "Dr. Davis",
    "Prof. Miller"
  ];

  const handleDepartmentChange = e => {
    const { value } = e.target;
    setDepartmentInput(value);
    setFormData(prev => ({
      ...prev,
      dept: value
    }));
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    
    if (name === 'password') {
      setPasswordError(validatePassword(value));
    }
    if (name === 'email') {
      setEmailError(validateEmail(value));
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    
    if (value.length > 6) {
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      password: value
    }));

    setPasswordError(validatePassword(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordValidation = validatePassword(formData.password);
    const emailValidation = validateEmail(formData.email);
    
    if (passwordValidation || emailValidation) {
      setPasswordError(passwordValidation);
      setEmailError(emailValidation);
      return;
    }

    try {
      await axios.post('http://localhost:5000/register', formData);
      alert('Registration successful');
      // Reset form after successful submission
      setFormData({
        admNo: '',
        name: '',
        dept: '',
        sem: '',
        tutorName: '',
        phone: '',
        email: '',
        password: '',
        image: null,
      });
      setDepartmentInput('');
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            placeholder="Enter your full name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="admNo">Admission Number:</label>
          <input 
            id="admNo" 
            name="admNo" 
            type="text" 
            placeholder="Enter admission number" 
            value={formData.admNo} 
            onChange={handleChange} 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dept">Department:</label>
          <input 
            id="dept" 
            name="dept" 
            type="text" 
            list="departments" 
            placeholder="Select or type department" 
            value={formData.dept} 
            onChange={handleDepartmentChange} 
            required
          />
          <datalist id="departments">
            {filteredDepartments.map((dept, index) => (
              <option key={index} value={dept} />
            ))}
          </datalist>
        </div>

        <div className="form-group">
          <label htmlFor="sem">Semester:</label>
          <input 
            id="sem" 
            name="sem" 
            type="number" 
            min="1" 
            max="8" 
            placeholder="Enter semester (1-8)" 
            value={formData.sem} 
            onChange={handleChange} 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tutorName">Tutor Name:</label>
          <input 
            id="tutorName" 
            name="tutorName" 
            type="text" 
            list="tutors" 
            placeholder="Select or type tutor name" 
            value={formData.tutorName} 
            onChange={handleChange} 
            required
          />
          <datalist id="tutors">
            {tutors.map((tutor, index) => (
              <option key={index} value={tutor} />
            ))}
          </datalist>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            id="phone" 
            name="phone" 
            type="tel" 
            placeholder="Enter phone number" 
            value={formData.phone} 
            onChange={handleChange} 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
            className={emailError ? 'input-error' : ''} 
            required
          />
          {emailError && (
            <div className="error-message">
              <span className="error-icon">⚠</span> {emailError}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            placeholder="Create password" 
            value={formData.password} 
            onChange={handlePasswordChange} 
            maxLength={6} 
            className={passwordError ? 'input-error' : ''} 
            required
          />
          {passwordError && (
            <div className="error-message">
              <span className="error-icon">⚠</span> {passwordError}
            </div>
          )}
          <div className="password-strength">
            <div className={`strength-indicator ${formData.password.length >= 6 ? 'valid' : ''}`}>
              Min 6 chars
            </div>
            <div className={`strength-indicator ${/[A-Z]/.test(formData.password) ? 'valid' : ''}`}>
              Capital letter
            </div>
            <div className={`strength-indicator ${/[0-9]/.test(formData.password) ? 'valid' : ''}`}>
              Number
            </div>
            <div className={`strength-indicator ${/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? 'valid' : ''}`}>
              Special char
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="image">Profile Photo:</label>
          <input 
            id="image" 
            type="file" 
            name="image" 
            accept="image/*" 
            onChange={handleChange} 
            className="file-input"
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
