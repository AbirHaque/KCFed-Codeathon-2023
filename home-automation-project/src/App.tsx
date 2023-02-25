import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tutorial from './components/Tutorial'
import CodePanel from './components/CodePanel'

function App() {

  return (
    <div className="App">
      <Tutorial number={1} title={"Variables"} text={"Ayylmao\nAyylmao"}/>
      <CodePanel str_items={'i=0\nfor i in range(100):\n\tif i%4==0:\n\t\tprint(i)'}></CodePanel>
    </div>
  )
}

export default App
