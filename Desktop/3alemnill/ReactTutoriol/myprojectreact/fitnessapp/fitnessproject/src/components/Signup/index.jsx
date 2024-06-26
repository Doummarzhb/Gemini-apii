// import React, { useState } from 'react';
// import './Signup.module.css';
// import { useNavigate  } from 'react-router-dom';
// function SignUp() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();  
 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData); 
//     navigate('/Home');
//   };

//   return (
//     <div className='center'> 
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default SignUp;
import React, { useState } from 'react';
import './Signup.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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
    console.log('Form submitted:', formData);
    const isAdmin = formData.email === 'admin@example.com' && formData.password === 'admin123';
    localStorage.setItem('formData', JSON.stringify(formData));
    if (isAdmin) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin'); 
    } else {
      navigate('/home');  
    }
  };

  return (
    <div className='center'> 
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <Navbar/>
          <h1>Sign Up</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="textt"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
         
        </form>
        <div className='pss'> 
        <b>Already have an account?  <a href="/login" className='already' >login </a>...</b></div>
      </div>
    </div>
  );
}

export default SignUp;
