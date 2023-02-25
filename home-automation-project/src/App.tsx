import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tutorial from './components/Tutorial'

function App() {

  return (
    <div className="App">
      <Tutorial number={1} title={"Variables"} text={"Ayylmao\nAyylmao"}/>
    </div>
  )
}

export default App
