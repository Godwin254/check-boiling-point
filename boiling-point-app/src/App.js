import React from 'react';
import './App.css';
import Calculator from './components/Calculator'

function App() {
  const calc = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    padding: '20px',
    marginbottom: '10px',
    textAlign: 'center',
    width: '50%',
    backgroundColor: 'white',
    boxShadow: '-0.3px 0.5px 5px black',
    border: 'none',
    borderRadius: '5px'
  }
  return (
    <div className="App" style = {calc}>
      <Calculator />
    </div>
  );
}

export default App;
