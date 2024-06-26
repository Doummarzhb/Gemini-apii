import React, { useState } from 'react';
// import './Signup.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const isAdmin = formData.email === 'admin@example.com' && formData.password === 'admin123';
    if (isAdmin) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/home');
    }
  };

  return (
    <div className='center'> 
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
             <Navbar/>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
