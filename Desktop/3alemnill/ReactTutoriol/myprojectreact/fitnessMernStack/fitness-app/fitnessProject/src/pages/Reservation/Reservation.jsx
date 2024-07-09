import React, { useState } from 'react';
import axios from 'axios';
import './Reservation.css';

const Reservation = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [salary, setSalary] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reservations', {
        fullName,
        email,
        phone,
        selectedMonth,
        salary,
      });
      if (response.status === 200) {
        setMessage('Reservation made successfully!');
        // Reset form fields
        setFullName('');
        setEmail('');
        setPhone('');
        setSelectedMonth('');
        setSalary('');
      }
    } catch (error) {
      setMessage('Failed to make reservation. Please try again.');
      console.error('Error making reservation:', error);
    }
  };

  return (
    <div className="reservation-container">
      <div className="reservation-form-wrapper">
        <h1 className="form-title">Reservation Form</h1>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="selectedMonth">Selected Month</label>
            <input
              type="text"
              id="selectedMonth"
              name="selectedMonth"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Reservation;
