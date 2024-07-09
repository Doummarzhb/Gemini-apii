import React ,{ useState }from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import PersonalTrainer from '../PersonalTrainer/PersonalTrainer'
 
function Homes() {
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(true); 
  // const setAdmin = () => {
  //   setIsAdmin(true);
  // };
  return (
    <div>
        <Navbar2/>
     <PersonalTrainer/>
    </div>
  )
}

export default Homes
