import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  // hook
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/box/jerry")
      .then((res) => res.json())
      .then((box) => setData(box.name))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>{!data ? "OKNOTOK": data}</p>
      </header>
    </div>
  );
}

export default App;
