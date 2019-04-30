import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import Numbers from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'


const numbers = [ 
{name:'7'}, {name:'8'}, {name:'9'}, {name: 'X'},
{name:'4'}, {name:'5'}, {name:'6'}, {name: '-'}, 
{name:'1'}, {name:'2'}, {name:'3'}, {name: '+'}, 
]

const bigButtons =[
  { name: 'clear'},
{ name: '0'}]
 
const App = () => {
  return (
    <div className = 'calculator-container'>
      <Display/>
      <div class = 'top-buttons'>
        <ActionButton text = 'clear'/>
        <ActionButton text = '/'/>
      </div>
      <div className = "numbers-box">
        
        {numbers.map(item =>(
          <Numbers numbers = {item}/>
        ))}
      </div>
      <div class = 'top-buttons'>
        <ActionButton text = '0'/>
        <ActionButton text = '='/>
      </div>
    </div>
  );
};

export default App;
