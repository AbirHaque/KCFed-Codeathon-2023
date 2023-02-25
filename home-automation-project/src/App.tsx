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
      str_items={'<div id="l1">ac_on=False #Initialize AC settings</div>\n<div id="l2">outside_temp=get_initial_temp() #Gets temperature at 12:00AM</div>\n<div id="l3">for time in range(0,24*60,<input id="q1" placeholder="Integer"></input>):</div>\n<div id="l4">\tif <input id="q2" placeholder="Variable name"></input>>90:</div>\n<div id="l5">\t\tac_on=True</div>\n<div id="l6">\telse:</div>\n<div id="l7">\t\tac_on=False</div>'}
      answers={'60\noutside_temp'}>
      </CodePanel>
    </div>
  )

  //return <HomePage />
}

export default App;
