import './App.css';
import React from 'react';

const Color = ({ title }) => (
  <div className="red" style={{ background: title }}>
    <p>{title}</p>
  </div>
);

const App = () => (
  <div className="app">

    <Color title="red" />
    <Color title="blue" />
    <Color title="green" />
    <Color title="yellow" />
    <Color title="pink" />

  </div>
);
export default App;
