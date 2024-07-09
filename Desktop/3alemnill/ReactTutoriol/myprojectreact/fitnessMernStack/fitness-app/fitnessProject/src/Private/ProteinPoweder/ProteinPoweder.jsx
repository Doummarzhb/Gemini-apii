import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './ProteinPowder.module.css';
import { MdEdit, MdDelete } from 'react-icons/md';
const ProteinPowder = () => {
  const [powders, setPowders] = useState([]);
  const [newPowder, setNewPowder] = useState({
    name: '',
    image: '',
    price: '',
    weight: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPowders = async () => {
      try {
        const storedPowders = localStorage.getItem('powders');
        if (storedPowders) {
          setPowders(JSON.parse(storedPowders));
        } else {
          const response = await axios.get('http://localhost:5000/api/powders');
          setPowders(response.data);
        }
      } catch (error) {
        console.error('Error fetching powders:', error);
        setError('Failed to fetch powders');
      }
    };

    fetchPowders();
  }, []);

  const updateLocalStorage = (updatedPowders) => {
    localStorage.setItem('powders', JSON.stringify(updatedPowders));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPowder({ ...newPowder, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const response = await axios.put(`http://localhost:5000/api/powders/${editId}`, newPowder);
        const updatedPowders = powders.map((powder) => (powder._id === editId ? response.data : powder));
        setPowders(updatedPowders);
        updateLocalStorage(updatedPowders);
        setMessage('Powder updated successfully!');
      } else {
        const response = await axios.post('http://localhost:5000/api/powders', newPowder);
        const updatedPowders = [...powders, response.data];
        setPowders(updatedPowders);
        updateLocalStorage(updatedPowders);
        setMessage('Powder added successfully!');
      }
      setError('');
      setNewPowder({ name: '', image: '', price: '', weight: '' });
      setEditMode(false);
      setEditId(null);
    } catch (error) {
      console.error('Error adding/updating powder:', error);
      setError('Failed to add/update powder');
      setMessage('');
    }
  };

  const handleEdit = (id) => {
    const powderToEdit = powders.find((powder) => powder._id === id);
    setNewPowder(powderToEdit);
    setEditMode(true);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/powders/${id}`);
      const updatedPowders = powders.filter((powder) => powder._id !== id);
      setPowders(updatedPowders);
      updateLocalStorage(updatedPowders);
      setMessage('Powder deleted successfully!');
      setError('');
    } catch (error) {
      console.error('Error deleting powder:', error);
      setError('Failed to delete powder');
      setMessage('');
    }
  };

  return (
    <div className={style.containerse}>
      <h4>Protein Powders</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newPowder.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPowder.image}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newPowder.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={newPowder.weight}
          onChange={handleChange}
          required
        />
        <button type="submit">{editMode ? 'Update Powder' : 'Add Powder'}</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <div className={style.powderList}>
        {powders.map((powder) => (
          <div key={powder._id} className={style.powderItem}>
            <img src={powder.image} alt={powder.name} className={style.powderImage} />
            <h3>{powder.name}</h3>
            <p>Price: {powder.price}</p>
            <p>Weight: {powder.weight}</p>
            <button onClick={() => handleEdit(powder._id)}><MdEdit/></button>
            <button onClick={() => handleDelete(powder._id)}><MdDelete/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProteinPowder;
