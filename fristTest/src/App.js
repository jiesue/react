import React from 'react';
// import './App.css';

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
