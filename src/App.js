import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './component/Projects';

function App() {
  return (
    <div className="App">
     <Projects projects="{projects}"/>
    </div>
  );
}

export default App;
