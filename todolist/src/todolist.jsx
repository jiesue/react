import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { ADDITEM, DELITEM, UPDATE_INPUT } from './store/actionTypes'
import { connect } from 'react-redux';
const data = [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]
const mapState = (state) => {
    return {
        input: state.todo.input,
        list: state.todo.list
    }
}
const mapDispatch = (dispatch) => {
    return {
        addItem: (value) => dispatch({ type: ADDITEM, value }),
        delItem: (index) => dispatch({ type: DELITEM, index }),
        update_input: (newValue) => dispatch({ type: UPDATE_INPUT, newValue })
    }
}
class TodoList extends Component {

    jonChange = (e) => {
        console.log(e.target.value)
        this.props.update_input(e.target.value)
    }
    jaddItem = () => {
        // alert(1)
        console.log(this.props.input)
        this.props.addItem(this.props.input)
        // this.props.update_input('')
    }
    // delItem = (index) => {
    //     console.log(index);
    //     alert(111,index)
    //     // this.props.delItem(index)
    // }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input placeholder='write someting' value={this.props.input} onInput={this.jonChange} style={{ width: '250px', marginRight: '10px' }} />
                    <Button onClick={this.jaddItem} type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, i) => (<List.Item onClick={this.props.delItem(i)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default connect(mapState, mapDispatch)(TodoList);