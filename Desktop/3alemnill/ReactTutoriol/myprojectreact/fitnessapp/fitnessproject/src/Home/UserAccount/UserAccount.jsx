import React, { useEffect, useState } from 'react';
import styles from './UserAccount.module.css';
import Navbar from '../../components/Navbar';

function UserAccount() {
  const [formData, setFormData] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }

    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }

    const storedReservationData = localStorage.getItem('reservationData');
    if (storedReservationData) {
      setReservationData(JSON.parse(storedReservationData));
    }
  }, []);

  const getTotalPrice = () => {
    return cartData.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className={styles.userAccountContainer}>
        <Navbar/>
      <h4>User Account</h4>
      {formData ? (
        <div className={styles.userInfo}>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      ) : (
        <p>No user data found. Please sign up.</p>
      )}

      <div className={styles.reservationData}>
        <h4>Reservations</h4>
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
        <h4>Shopping Cart</h4>
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
        {cartData.length > 0 && (
          <div className={styles.totalPrice}>
            <h4>Total Price: ${getTotalPrice()}</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAccount;
