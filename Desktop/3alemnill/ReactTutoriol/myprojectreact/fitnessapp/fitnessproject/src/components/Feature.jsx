import React from 'react'
import Featurebox from "./Featurebox";
import fimage1 from '../components/images/1.svg'
import fimage2 from '../components/images/2.svg'
import fimage3 from '../components/images/3.svg'
import fimage4 from '../components/images/4.svg'


function feature() {
  return (
    <div id='features'>
        <h1>Features</h1>
      <div className='a-container'>
        <Featurebox image={fimage1} title="WeightLifting"/>
        <Featurebox image={fimage2} title="Specific Muscle"/>
        <Featurebox image={fimage3} title="Flex Your Muscle"/>
        <Featurebox image={fimage4} title="Cardio Exercise"/>
      </div>
    </div>
  )
}

export default feature
