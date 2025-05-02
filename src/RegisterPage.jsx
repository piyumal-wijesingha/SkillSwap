import React, { useState } from 'react';
import './RegisterPage.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minUsernameLength = 3; 
  const minPasswordLength = 6; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    
    switch (name) {
      case 'email':
        setErrors({
          ...errors,
          email: emailRegex.test(value) ? '' : 'Invalid email format',
        });
        break;
      case 'username':
        setErrors({
          ...errors,
          username: value.length >= minUsernameLength ? '' : `Username must be at least ${minUsernameLength} characters`,
        });
        break;
      case 'password':
        setErrors({
          ...errors,
          password: value.length >= minPasswordLength ? '' : `Password must be at least ${minPasswordLength} characters`,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (errors.email || errors.username || errors.password) {
      let errorMessage = "Please fix the following errors:\n";
  
      if (errors.email) {
        errorMessage += `- ${errors.email}\n`;
      }
      if (errors.username) {
        errorMessage += `- ${errors.username}\n`;
      }
      if (errors.password) {
        errorMessage += `- ${errors.password}\n`;
      }
  
      alert(errorMessage);
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div id="register-container">
      <button id="back-button">Back</button>
      <button id="home-button">Home</button>

      <form id="form-card" onSubmit={handleSubmit}>
        <div>
          <button id="label-button">E-MAIL</button>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <button id="label-button">USERNAME</button>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            id="username-input"
            value={formData.username}
            onChange={handleChange}
            required
          />
          
        </div>
        
        <div>
          <button id="label-button">PASSWORD</button>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            id="password-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" id="reg-button">Sign In</button>
      </form>
    </div>
  );
}

export default RegisterPage;
