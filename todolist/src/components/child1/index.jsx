import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './index.scss';
import SubChild1 from './components/subChild1'
import SubChild2 from './components/subChild2'
class Child1 extends Component {
    render() {
        return (
            <div className='child1'>
               
                <div className="top">
                    {/* {console.log(this.props)} */}
                    <Link to={`${this.props.match.url}/subChild1`}>嵌套1</Link>
                    <Link to={`${this.props.match.url}/subChild2`}>嵌套2</Link>
                </div>
                <div className="con" style={{ width: '100%', height: '100%' }}>
                    <Route exact path={this.props.match.path} render={() => (<Redirect to={`${this.props.match.path}/subChild1`} />)} />
                    <Route exact path={`${this.props.match.path}/subChild1`} component={SubChild1} />
                    <Route exact path={`${this.props.match.path}/subChild2`} component={SubChild2} />
                </div>
            </div>
        );
    }
}

export default Child1;