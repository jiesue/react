import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { ADDITEM, DELITEM, UPDATE_INPUT } from './store/actionTypes'
import { delItemCreator, addItemCreator } from './store/actionCreators'

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
        addItem: (value) => {
            dispatch(addItemCreator(value))
        },
        delItem: (index) => {
            dispatch(delItemCreator(index))
        },
        update_input: (newValue) => dispatch({ type: UPDATE_INPUT, newValue })
    }
}
class TodoList extends Component {

    jonChange = (e) => {
        console.log(e.target.value, 'jonChange')
        this.props.update_input(e.target.value)
    }
    jaddItem = () => {
        // alert(1)
        console.log(this.props.input, 'jaddItem')
        this.props.addItem(this.props.input)
        this.props.update_input('')
    }
    // jdelItem = (index) => {
    //     console.log(index, 'mydel');
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
                        renderItem={(item, i) => (<List.Item onClick={this.props.delItem.bind(this, i)
                        }>{item}</List.Item>)}
                    />

                    {/* {
                        this.props.list.map((element,i) => {
                            return (<li onClick={this.props.delItem.bind(this,i)}> {element} </li>)
                            console.log(element)
                        })
                    } */}
                </div>
            </div>
        );
    }
}
export default connect(mapState, mapDispatch)(TodoList);