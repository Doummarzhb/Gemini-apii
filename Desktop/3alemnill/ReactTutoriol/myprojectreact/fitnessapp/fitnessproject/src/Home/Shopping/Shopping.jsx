import React, { useState, useEffect } from 'react';
import styles from './Shopping.module.css';
import Cart from '../cart/cart'
import Navbar from '../../components/Navbar';

function Shopping() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const products = [
    {
      id: 1,
      name: 'Whey Protein',
      description: 'High-quality protein supplement for muscle growth.',
      price: '$49.99',
      image: '/src/components/images/one.jpeg' 
    },
    {
      id: 2,
      name: 'Plant-based Protein',
      description: 'Vegan-friendly protein source for muscle recovery.',
      price: '$39.99',
      image: '/src/components/images/plan.jpeg'  
    },
    {
      id: 3,
      name: 'Casein Protein',
      description: 'Slow-digesting protein for overnight muscle repair.',
      price: '$29.99',
      image: '/src/components/images/one.jpeg'  
    },
    {
      id: 4,
      name: 'BCAAs',
      description: 'Branched-chain amino acids for muscle recovery and endurance.',
      price: '$19.99',
      image: '/src/components/images/BCAAs.jpeg'
    },
    {
      id: 5,
      name: 'Pre-Workout Supplement',
      description: 'Boosts energy, focus, and endurance before workouts.',
      price: '$34.99',
      image: '/src/components/images/workoud.jpeg'
    },
    {
      id: 6,
      name: 'L-Glutamine',
      description: 'Supports muscle recovery and immune system health.',
      price: '$17.99',
      image: '/src/components/images/cusst.jpeg'
    }
  ];

  return (
    <div className={styles.shoppingContainer}>
      <Navbar/>
      <h1>Shopping for Gym Proteins</h1>
      <button onClick={toggleCart} className={styles.cartButton}>
        {isCartOpen ? 'Close Cart' : 'View Cart'}
      </button>
      {isCartOpen && <Cart cart={cart} setCart={setCart} />}
      <div className={styles.productsContainer}>
        {products.map(product => (
          <div key={product.id} className={styles.productItem}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productInfo}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className={styles.productPrice}>{product.price}</p>
              <button onClick={() => addToCart(product)} className={styles.buyButton}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
