import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  // hook
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/box/jerry")
      .then((res) => res.json())
      .then((box) => setData(box)) // pasar la propiedad o el objeto
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>{!data ? "OKNOTOK": data.name}</p>
      </header>
    </div>
  );
}

export default App;
