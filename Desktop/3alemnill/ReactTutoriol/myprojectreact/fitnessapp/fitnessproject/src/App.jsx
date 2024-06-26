import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import SignUp from './components/Signup';
import Feature from './components/Feature';
import Offer from './components/offer';
import Home from './Home/Home';
// import Shopping from './Home/Shopping/Shopping';

 
function AppContent() {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/signup';
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // {isAuthenticated ? <Home /> : <Navbar/>}
  return (
    <div>
      <Navbar />
      {!isSignUpPage && <Header />}
      {!isSignUpPage && <Feature />}
      {!isSignUpPage && <Offer />}
      {!isSignUpPage && <About />}


      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
    
       

 
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
    <AppContent />
    </Router>
  );
}

export default App;
 
 
