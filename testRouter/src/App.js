import React from 'react';
// import './App.css';
// import { Swtich, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Child1 from './components/child1'
import Child2 from './components/child2'
import Child3 from './components/child3'

function Jie() {
  return (
    <div>
      <h2>这是我的react</h2>
      <h1>jie:
        <Route path='/child1' component={Child1}></Route>
        <Route path='/child2' component={Child2}></Route>
        <Route path='/child3' component={Child3}></Route>
      </h1>

    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ width: '1206px', height: '1000px', margin: '0 auto' }}>

        <Router>
          <header>
            <NavLink  to="/child1" style={{ color: 'green' }} activeStyle={{ color: '#f40' }}>1111</NavLink> <br />
            <NavLink to="/child2" activeClassName="active">2222</NavLink><br />
            <NavLink to="/child3">3333</NavLink><br />
          </header>

          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/child1" />)} />
            <Route path="/child1" component={Child1} />
            <Route path="/child2" component={Child2} />
            <Route path="/child3" component={Child3} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
