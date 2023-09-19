import React, { useState } from 'react';
import axios from 'axios'; // Import Axios


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Create a JSON object from the form data
    const loginData = {
      email: formData.email,
      password: formData.password,
    };
    console.log(loginData);

    // Send the JSON object to your server or API using Axios
    axios
      .post('http://localhost:3001/login', loginData)
      .then((response) => {
        // Handle the response data (e.g., authentication success/failure)
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was a problem with the Axios request:', error);
      });
  };

  return (
    <>
      <h1>Login-Page</h1>
      <div className="login-wrapper">
        <h3>User ID</h3>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <h3>Password</h3>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
