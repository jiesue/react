import React, { Component } from 'react';
class Jie extends Component {
    constructor(props) {
        super(props);
        this.text = "65899"

    }
    my(e){
        alert(1)
    }
    render() {
        return (
            <ul>
                {
                    //jasdkfadkfjsd
                    this.props.text.map( (item, i) => <li onClick={this.my} key={i}>{item}</li> )
                }
            </ul>
        );
    }
}

export default Jie;