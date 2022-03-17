import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/counter';
import { LearnInput } from './components/events/learninginput';
import { Render } from './components/render/render';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <LearnInput></LearnInput>
     <Render></Render>
    </div>
  );
}

export default App;
