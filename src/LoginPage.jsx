import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const minUsernameLength = 3;
  const minPasswordLength = 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    
    switch (name) {
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

    if (errors.username || errors.password) {
      let errorMessage = "Please fix the following errors:\n";

      if (errors.username) {
        errorMessage += `- ${errors.username}\n`;
      }
      if (errors.password) {
        errorMessage += `- ${errors.password}\n`;
      }

      alert(errorMessage);
    } else {
      alert('Login successful!');
      
    }
  };

  return (
    <div id="register-container">
      <button id="back-button">Back</button>
      <button id="home-button">Home</button>

      <form id="form-card-login" onSubmit={handleSubmit}>
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

          <button type="submit" id="log-button">Lgin</button>
      </form>
    </div>
  );
};

export default LoginPage;

