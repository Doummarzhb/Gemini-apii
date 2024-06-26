// Cart.jsx
import React from 'react';
import styles from './Cart.module.css';

function Cart({ cart, setCart }) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <span className={styles.span}>Your cart is empty.</span>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.cartImage} />
                <div className={styles.cartInfo}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(index)} className={styles.removeButton}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.totalPrice}>
            <h2 className={styles.total}>Total Price: ${getTotalPrice()}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
