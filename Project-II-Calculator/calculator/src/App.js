import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import Numbers from './components/ButtonComponents/NumberButton.js'
import BigButtons from './components/ButtonComponents/ActionButton.js'


const numbers = [
  {name:'1'}, {name:'2'}, {name:'3'}, {name:'4'}, {name:'5'},
   {name:'6'}, {name:'7'}, {name:'8'}, {name:'9'}
]

const App = () => {
  return (
    <div className = 'calculator-container'>
      <Display/>
      <Numbers/>
      <BigButtons/>
     
    </div>
  );
};

export default App;
