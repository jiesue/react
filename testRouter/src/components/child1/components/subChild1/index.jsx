import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
class SubChild1 extends Component {
    render() {
        return (
            <div className='subChild1'>
                我是subChild1
            </div>
        );
    }
}

export default SubChild1;