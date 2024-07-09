import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar1 from './components/Navbar1/Navbar1';
import Home from './components/Home/Home';
import About from './components/About/about';
import Contact from './components/contactus/contact';
import Footer from './components/Footer/footer';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
 import JoinUs from './components/JoinUs/JoinUs';
 import Class from './components/Class/Class';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Plan from './components/Plan/Plan';
import Explore from './components/Explore/Explore';
import Header from './components/Header/Header';
import Homes from './pages/Homes/Homes';
import Navbar2 from './components/Navbar2/Navbar2';
import Reservation from './pages/Reservation/Reservation';
import Tools from './pages/Tools/Tools';
import Nutrition from './pages/Nutrition/Nutrition';
import PersonalTrainer from './pages/PersonalTrainer/PersonalTrainer';
import WorkoudPrograms from './Private/WorkoudPrograms/WorkoudPrograms';
 import TrainingSession from './pages/TrainingSession/TrainingSession';
 import NutritionPlan from './Private/NutritionPlans/NutritionPlan';
import ProgressTracking from './Private/ProgressTracking/ProgressTracking';
import Management from './pages/Managment/Managment';
import FatLoss from './Private/FatLoss/FatLoss';
import WeightGain from './Private/WeightGain/WeightGain';
import PhysicalSession from './Private/PhysicalSession/PhysicalSession';
import ProteinPoweder from './Private/ProteinPoweder/ProteinPoweder';
import MyAccount from './pages/MyAccount/MyAccount';
 import AdminBookings from './Admin/AdminBookings/AdminBookings';
 import BodyBuilding from './FatlossPrivate/BodyBuilding/BodyBuilding';
 import Boxing from './FatlossPrivate/Boxing/Boxing';
 import Crossfit from './FatlossPrivate/Crossfit/Crossfit';
 import Fitnessprivate from './FatlossPrivate/Fitnessprivate/Fitnessprivate';
 import Personalized from './Private/Personalized/Personalized';
 
// import Navbar2 from './components/Navbar2/Navbar2';
function AppContent() {
  // const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();
  const isSignUpPage = location.pathname === '/signups';
  const isLogin = location.pathname === '/login';
  const isHomesPage = location.pathname === '/homes';
  const isReserv = location.pathname === '/reservation';
  const istools = location.pathname === '/tools';
  const isNutriton = location.pathname ==='/nutrition';
  // const MyAccount = location.pathname ==='myaccount';
  const isPersonalTrainer = location.pathname === '/personaltrainer';
  const isTrainingSession = location.pathname==='/trainingsession';
const isWorkoudPrograms = location.pathname === '/workoudprograms';
const isNutritionPlan = location.pathname === '/nutritionplan';
const isProgressTracking = location.pathname === '/progresstraicking';
 const isManagment = location.pathname ==='/managment';
 const isFatLoss = location.pathname==='/fatloss';
 const isWeightGain=location.pathname==='/weightgain';
 const isPhysicalSession=location.pathname==='/physicalsession';
 const isProteinPoweder=location.pathname==='/proteinpoweder';
 const isMyAccount = location.pathname === '/myaccount';
 const isAdminBookings= location.pathname=== '/admin';
 const isBodyBuilding=location.pathname === '/bodybuilding';
 const isBoxing=location.pathname === '/boxing';
 const isCrossfit=location.pathname === '/crossfit';
 const isFitnessprivate=location.pathname === '/fitnessprivate';
 const isPersonalized = location.pathname === '/personalized';
 

//  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState('');
  // const [role, setRole] = useState('user'); 
 
  // {isAdmin && <Navbar2 />}
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        console.log('Data fetched successfully:', response.data);
        setMessage(response.data.message);
      })
      .catch(error => {
        // console.error('Error fetching data:', error.message);
        // console.error('Error details:', error);
      });
      // const token = localStorage.getItem('token');
      // if (token) {
      //   const decodedToken = jwt_decode(token);
      //   setRole(decodedToken.role);
      // }
  }, []);
  
  return (
    <div>
   {/* {isHomesPage && <Navbar2 isAdmin={isAdmin} />} */}

    {!(isSignUpPage || isLogin || isHomesPage || isReserv || istools || isNutriton || isPersonalTrainer || isTrainingSession || isWorkoudPrograms  || isNutritionPlan || isProgressTracking || isManagment ||isFatLoss || isWeightGain || isPhysicalSession || isProteinPoweder || isMyAccount ||isAdminBookings || isBodyBuilding  || isBoxing || isCrossfit || isFitnessprivate || isPersonalized)   && <Navbar1 />  }
    {/* {isHomesPage && <Navbar2 /> }   */}

    {/* {!isSignUpPage && !isLogin   && <About />} */}
    {/* {!isSignUpPage && !isLogin   &&<Contact />} */}
    {/* {!isSignUpPage && !isLogin &&<Footer />} */}

    
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signups" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
     <Route path="/joinus" element={<JoinUs />} />
     <Route path="/class" element={<Class />} />
     <Route path="/plan" element={<Plan />} />
     <Route path="/explore" element={<Explore />} />
     <Route path='/header' element= {<Header/>}/>
     <Route path='/about' element= {<About/>}/>
     <Route path='/footer' element= {<Footer/>}/>
     <Route path='/homes' element={<Homes/>} />
     <Route path='/reservation' element={<Reservation/>} />
     <Route path='/tools' element={<Tools/>} />
     <Route path='/nutrition' element={<Nutrition/>} />
     <Route path='/personaltrainer' element={<PersonalTrainer/>} />
     <Route path='/trainingsession' element = {<TrainingSession/>}/>
     <Route path='/workoudprograms' element={<WorkoudPrograms/>}/>
     <Route path='/nutritionplan' element={<NutritionPlan />}/> 

     <Route path='/progresstraicking' element={<ProgressTracking/>}/>
     <Route path='/managment' element={<Management/>}/>
     <Route path='/fatloss' element={<FatLoss/>}/>
     <Route path='/weightgain' element={<WeightGain/>}/>
     <Route path='/physicalsession' element={<PhysicalSession/>}/>
     <Route path='/proteinpoweder' element={<ProteinPoweder/>}/>
     <Route path="/myaccount" element={<MyAccount />} />
     <Route path="/admin" element={<AdminBookings />} />

     
     {/* <Route path="/bodybuilding" element={<BodyBuilding />} />
     <Route path="/boxing" element={<Boxing />} />
     <Route path="/crossfit" element={<Crossfit />} />
     <Route path="/fitnessprivate" element={<FitnessPrivate />} /> */}
     <Route path="/personalized" element={<Personalized />} />
     {/* <Route path="/addnutritionplan" element={<AddNutritionPlan />} /> */}
     {/* <Route path='/myaccount' element={<Myaccount/>} /> */}
     {/* <Route path="*" element={<Navigate to="/home" />} /> */}
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
