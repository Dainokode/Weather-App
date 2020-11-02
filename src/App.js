import React from 'react'
import "./styles/main.scss";
import CountUp from 'react-countup';

const App = () => {

  return (
    <div>
      <h1><CountUp end={100} duration={4} /></h1>
    </div>
  )
}

export default App

