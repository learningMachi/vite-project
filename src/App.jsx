import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './command/Card1'
import Card2 from './command/Card2'
import Card3 from './command/Card3'
const App = () => {
  return(
    <div className='style'> 
      <Card1/>
      <Card2/>
      <Card3/>
    </div>
  )
}


export default App;

