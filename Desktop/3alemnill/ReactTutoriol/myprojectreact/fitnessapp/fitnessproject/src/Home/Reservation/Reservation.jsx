import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Reservation.module.css'; 

function Reservation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    selectedMonth: ''
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
    localStorage.setItem('reservationData', JSON.stringify(formData));
    navigate('/'); 
  };

  return (
    <div className={styles.reservationContainer}>
      <h1 id='resss'>Reservation Form</h1>
      {/* <span>Please fill out the form below to make a reservation.</span> */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroupp}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroupp}>
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
        <div className={styles.formGroupp}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroupp}>
          <label htmlFor="month">Selected Month</label>
          <input
            type="month"
            id="month"
            name="month"
            value={formData.month}
            onChange={handleChange}
            required
          />
        </div>
   
        <button type="submit" className={styles.submitButton}>Submit Reservation</button>
      </form>
    </div>
  );
}

export default Reservation;
