import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from './components/TabMenu/index';

function App() {
  const email= "TrongLinh@gmail.com";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hehe
        </a>
        <TabMenu email={email}/>
      </header>
    </div>
  );
}

export default App;
