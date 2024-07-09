import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaDumbbell } from 'react-icons/fa';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from backend upon component mount
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Admin View: Manage Bookings</h2>
      <div className="bookings">
        {bookings.map(booking => (
          <div key={booking._id} className="booking">
            <p><FaUser /> Name: {booking.name}</p>
            <p><FaEnvelope /> Email: {booking.email}</p>
            <p><FaPhone /> Phone: {booking.phone}</p>
            <p><FaDumbbell /> Trainer: {booking.selectedTrainer}</p>
            <p><FaCalendarAlt /> Date and Time: {booking.dateTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBookings;
