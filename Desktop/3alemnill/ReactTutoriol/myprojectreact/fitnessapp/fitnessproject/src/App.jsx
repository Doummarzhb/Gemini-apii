import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import SignUp from './components/Signup';
import Feature from './components/Feature';
import Offer from './components/Offer';
import Home from './Home/Home';
import Reservation from './Home/Reservation/Reservation'
import Tools from './Home/Tools/Tools';
import Shopping from './Home/Shopping/Shopping';
import Nutrition from './Home/Nutrition/Nutrition';
import Admin from './Home/Admin/Admin';
import UserAccount from './Home/UserAccount/UserAccount';
import SocialPage from './Home/Socialpage/Socialpage';

function AppContent() {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/signup';
  const isHomePage = location.pathname === '/home';
  const isReservationPage = location.pathname === '/reservation';
  const isToolsPage = location.pathname === '/tools';
  const isShoppingPage = location.pathname === '/shopping';
  const isNutrition = location.pathname === '/nutrition';
  const isAdminPage = location.pathname === '/admin';
  const isUserAccountPage = location.pathname === '/useraccount';
  const isSocialpage =location.pathname ==='/socialpage';


  return (
    <div>
      {/* {!(isSignUpPage || isHomePage) && <Navbar />}
      {!isSignUpPage && !isHomePage && <Header />}
      {!isSignUpPage && !isHomePage && <Feature />}
      {!isSignUpPage && !isHomePage && <Offer />}
      {!isSignUpPage && !isHomePage && <About />} */}
      {/* {isHomePage && <Reservation />} */}

      {!(isSignUpPage || isHomePage || isReservationPage || isToolsPage || isShoppingPage  || isNutrition  || isAdminPage || isUserAccountPage || isSocialpage)   && <Navbar />}
      {!isSignUpPage && !isHomePage && !isReservationPage && !isToolsPage   && !isShoppingPage && !isNutrition && !isAdminPage && !isUserAccountPage && ! isSocialpage && <Header />}
      {!isSignUpPage && !isHomePage && !isReservationPage && !isToolsPage &&  !isShoppingPage && !isNutrition &&  !isAdminPage &&  !isUserAccountPage && ! isSocialpage &&<Feature />}
      {!isSignUpPage && !isHomePage && !isReservationPage && !isToolsPage &&  !isShoppingPage && !isNutrition &&  !isAdminPage &&  !isUserAccountPage && ! isSocialpage && <Offer />}
      {!isSignUpPage && !isHomePage && !isReservationPage && !isToolsPage &&   !isShoppingPage && !isNutrition &&  !isAdminPage &&  !isUserAccountPage && ! isSocialpage && <About />}
      {!isSignUpPage && !isHomePage && !isReservationPage && !isToolsPage &&   !isShoppingPage && !isNutrition &&  !isAdminPage &&  !isUserAccountPage && ! isSocialpage && <Contact />}

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/socialpage" element={<SocialPage />} />








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
