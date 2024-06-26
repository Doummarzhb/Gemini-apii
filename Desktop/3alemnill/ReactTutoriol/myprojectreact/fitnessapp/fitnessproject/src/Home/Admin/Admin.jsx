import React, { useEffect, useState } from 'react';
import styles from './Admin.module.css';

function Admin() {
  const [reservationData, setReservationData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [formData, setFormData] = useState(null);
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    const storedReservationData = localStorage.getItem('reservationData');
    if (storedReservationData) {
      setReservationData(JSON.parse(storedReservationData));
    }

    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }

    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }

    const storedLoginData = localStorage.getItem('loginData');
    if (storedLoginData) {
      setLoginData(JSON.parse(storedLoginData));
    }
  }, []);

  return (
    <div className={styles.adminContainer}>
      <h1>Admin Page</h1>
      {formData && (
        <div className={styles.userInfo}>
          <p><strong>Username:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}
      <div className={styles.reservationData}>
        <h2>Reservations</h2>
        {reservationData.length > 0 ? (
          <ul>
            {reservationData.map((reservation, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {reservation.fullName}</p>
                <p><strong>Email:</strong> {reservation.email}</p>
                <p><strong>Phone:</strong> {reservation.phoneNumber}</p>
                <p><strong>Month:</strong> {reservation.selectedMonth}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reservations found.</p>
        )}
      </div>
      <div className={styles.cartData}>
        <h2>Shopping Cart</h2>
        {cartData.length > 0 ? (
          <ul>
            {cartData.map((item, index) => (
              <li key={index}>
                <p><strong>Item:</strong> {item.name}</p>
                <p><strong>Price:</strong> {item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in cart.</p>
        )}
      </div>
    </div>
  );
}

export default Admin;
