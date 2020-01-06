import React from 'react';
// import './App.css';
import {Swtich, Route, Router, HashHistory, Link} from 'react-router-dom';
import Child1 from './components/child1'
import Child2 from './components/child2'
import Child3 from './components/child3'

function Jie() {
  return (
    <div>
      <h1>jie</h1>
      <h2>这是我的react</h2>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Jie></Jie>
      </div>
    )
  }
}

export default App;
