import React from 'react'

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Alias beatae quam ad 
              dolorem deleniti ullam illo nemo suscipit quas at quis eos laborum,
               iure, maxime itaque qui, facere asperiores eum?</p>
        </div>
      
    </div>
  )
}

export default Featurebox
