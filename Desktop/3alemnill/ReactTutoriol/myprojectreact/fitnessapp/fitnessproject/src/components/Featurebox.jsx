import React from 'react'

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>
Gym tools encompass a variety of equipment designed to enhance physical fitness,
 including free weights, machines, and accessories for strength training, cardio,
  and flexibility exercises.
 They cater to different fitness goals, from muscle building to endurance improvement and overall health.</p>
        </div>
      
    </div>
  )
}

export default Featurebox
