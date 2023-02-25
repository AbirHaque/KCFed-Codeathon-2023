import { useState } from 'react'
import './App.css'
import Tutorial from './components/Tutorial'
import CodePanel from './components/CodePanel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HomePage } from './components/HomePage'

function App() {

  // return (
  //   <div className="App">
  //     <CodePanel str_items={'ac_on=False\nfor time in range(0,24*60,60):\n\tif outside_temp>90:\n\t\tac_on=True\n\telse:\n\t\tac_on=False'}></CodePanel>
  //   </div>
  // )

  return <HomePage />
}

export default App
