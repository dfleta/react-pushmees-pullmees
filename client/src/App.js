import logo from './logo.svg';
import './App.css';
import Box from './components/Box'
import React from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box value={"jerry"} />
      </header>
    </div>
  );
}

export default App;
