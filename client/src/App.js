import './App.css';
import Box from './components/Box'
import React from 'react';
import PressButton from './components/PressButton'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Box value={"jerry"} />
        <PressButton />
      </header>
    </div>
  );
}

export default App;
