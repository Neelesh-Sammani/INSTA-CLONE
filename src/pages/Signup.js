import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './Signup.css'; // Import your CSS file


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Signup successful');
        navigate('/login');
        // Redirect to login page after successful signup
        // You can use React Router for navigation
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className="signupContainer">
      <Typography variant="body1" fontFamily="Dancing Script, sans-serif">
        <h1 style={{ marginLeft: '16px',fontWeight:'bold',textAlign:'center',fontSize:'52px' }}>Instagram</h1>
      </Typography>
      <h1 className="signupHeader" style={{fontWeight:'lighter',textAlign:'center',fontSize:'22px'}}>Sign up to see photos and videos from your friends.</h1>
      <form className="signupForm" onSubmit={handleSubmit}>
        <input
          className="signupInput"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="signupInput"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          className="signupInput"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          className="signupInput"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className="signupButton" type="submit">Sign Up</button>
      </form>
      <p className="signupTerms">By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
    </div>
    <div className='belowContainer'>
      <p>Have an account?{" "}
      <Link className="link" to="/login">
          Login
      </Link></p>
    </div>
    </>
  );
};

export default Signup;
