import { useState } from 'react'
import './App.css'
import Tutorial from './components/Tutorial'
import CodePanel from './components/CodePanel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HomePage } from './components/HomePage'

function App() {

  return (
    <div className="App">
      <CodePanel 
      str_items={'ac_on=False #Initialize AC settings\noutside_temp=get_initial_temp() #Gets temperature at 12:00AM\nfor time in range(0,24*60,<input id="q1" placeholder="Integer"></input>):\n\tif <input id="q2" placeholder="Variable name"></input>>90:\n\t\tac_on=True\n\telse:\n\t\tac_on=False'}
      answers={'60\noutside_temp'}>
      </CodePanel>
    </div>
  )

  return <HomePage />


export default App
