import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //   try {
    //     const response = await axios.post('http://localhost:3000/api/auth/login', { email: 'example@example.com',
    //     password: 'password123'});
    //     localStorage.setItem('token', response.data.token);
    //     navigate('/homes');
    //   } catch (error) {
    //     setError('Something went wrong. Please try again later.');
    //             // console.log('Error logging in:', error);
    //   }
    // };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/homes");
      console.log("User logged in successfully:", response.data);
    } catch (error) {
      // console.error('Error during login:', error.response.data);
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
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
