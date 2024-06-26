import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
       <ul>
       
        <li>
          <Link to="/reservation">reservation</Link>
        </li>
        <li>
          <Link to="/shopping">shopping</Link>
        </li>
        <li>
          <Link to="/tools">tools</Link>
        </li>
        
 </ul>
    </div>
  )
}

export default Home
