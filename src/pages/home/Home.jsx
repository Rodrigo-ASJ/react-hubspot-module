import React from 'react'

import SpinningLogo from '../../components/SpinningLogo';
import Card from '../../components/Card';
import reactLogo from '../../images/logo.svg';
import sprocketLogo from '../../images/sprocket.svg';


const Home = ({ moduleData }) => {
  return (

    <div className="cms-react-boilerplate__container">
      <div className="spinning-logo__container">
        <SpinningLogo src={reactLogo} alt="react logo" />
        <SpinningLogo
          src={sprocketLogo}
          alt="sprocket logo"
          isSprocket={true}
        />
      </div>

      <p class="text-red-500 text-3xl">
        Edit <code>src/App.js</code> and save to reload.
      </p>

      
      
      <Card initialClickCount={moduleData.initial_count} /> 
    </div>

    
  )
}

export default Home