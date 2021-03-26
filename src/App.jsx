import './App.css';
import React from 'react';

const Red = () => (
  <div className="red">
    <p>Red</p>
  </div>
);

const Blue = () => (
  <div className="blue">
    <p>Blue</p>
  </div>
);

const Green = () => (
  <div className="green">
    <p>green</p>
  </div>
);

const App = () => (
  <div className="app">

    <Red />
    <Blue />
    <Green />

  </div>
);
export default App;
