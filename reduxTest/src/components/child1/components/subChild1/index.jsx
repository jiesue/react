import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const mapStateToProps = (state) => {
    return {
        num: state.num
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({ type: 'increase' }),
        decrease: () => dispatch({ type: 'decrease' })
    }
}
class SubChild1 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { decrease, increase } = this.props;

        return (
            <div className='subChild1'>
                <h2>{this.props.num} 1</h2>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                我是subChild1
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubChild1);