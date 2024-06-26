import React, { useEffect, useState } from 'react';
import styles from './Admin.module.css';
import Navbar from '../../components/Navbar';

function Admin() {
  const [reservationData, setReservationData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [formData, setFormData] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

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

//     const storedLoginData = localStorage.getItem('loginData');
//     if (storedLoginData) {
//       setLoginData(JSON.parse(storedLoginData));
//     } else {
//       setFormData({ name: 'Admin', email: 'admin@example.com' });
//     }
//   }, []);

  const storedLoginData = localStorage.getItem('loginData');
  if (storedLoginData) {
    const loginInfo = JSON.parse(storedLoginData);
    setFormData(loginInfo);
    setIsAdmin(loginInfo.email === 'admin@example.com'); // Check if admin
  } else {
    // Default admin info if no login data found
    setFormData({ name: 'Admin', email: 'admin@example.com' });
    setIsAdmin(true); // Assume admin
  }
}, []);

  return (
    <div className={styles.adminContainer}>
        <Navbar/>
      <h1>Admin Page</h1>
      {formData && (
        <div className={styles.userInfooo}>
          {isAdmin ? (
            <p><strong>Admin Name:</strong> {formData.name}</p>
          ) : (
            <p><strong>User Name:</strong> {formData.name}</p>
          )}
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}
      <div className={styles.reservationDataaaa}>
        <h2>Reservations</h2>
        {reservationData.length > 0 ? (
          <ul>
            {reservationData.map((reservation, index) => (
              <li key={index}>
                <p><strong>Full Name:</strong> {reservation.fullName}</p>
                <p><strong>Email:</strong> {reservation.email}</p>
                <p><strong>Phone Number:</strong> {reservation.phoneNumber}</p>
                <p><strong>Selected Month:</strong> {reservation.selectedMonth}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reservations found.</p>
        )}
      </div>
      <div className={styles.cartDataa}>
        <h2>Shopping Cart</h2>
        {cartData.length > 0 ? (
          <ul>
            {cartData.map((item, index) => (
              <li key={index}>
                <p><strong>Item Name:</strong> {item.name}</p>
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
