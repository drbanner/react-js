import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import  Logout from './Logout';
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Logout/>
      </Fragment>
      <Fragment><Timer/></Fragment>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
