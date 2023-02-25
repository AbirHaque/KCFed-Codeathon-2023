import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tutorial from './components/Tutorial'
import CodePanel from './components/CodePanel'

function App() {

  return (
    <div className="App">
      <CodePanel str_items={'ac_on=False\nfor time in range(0,24*60,60):\n\tif outside_temp>90:\n\t\tac_on=True\n\telse:\n\t\tac_on=False'}></CodePanel>
    </div>
  )
}

export default App
