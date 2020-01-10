import React, { Component } from 'react' //引入react
import PropTypes from 'prop-types' //引入限制UI组件(展示组件)属性限制
import ReactDOM from 'react-dom' //引入react-dom相关的对象
import { createStore } from 'redux' //引入redux
import { Provider, connect } from 'react-redux'//引入react配套的redux

// 创建react组件(或者是虚拟节点)
class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props;
        //通过解构赋值得到相应的属性里面的值
        //在这里Counter是UI组件(展示组件)其属性是其外面的容器组件中的state是通过react-redux中的connect操作之后传递过来的
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                {/*通过点击事件触发绑定的属性,很明显,在这里onIncreaseClick是一个方法或者是一个对象的key值,其映射的value值是一个函数*/}
            </div>
        )
    }
}

//对展示组件中属性各个值得类型进行限制 不合符规则会报错
Counter.propTypes = {
    value: PropTypes.number.isRequired, //属性对象中的value必须是number类型还有必须有值
    onIncreaseClick: PropTypes.func.isRequired //属性对象中的onIncreaseClick必须是函数还有必须有值
};

// 这里定义的是一个action对象,我的理解就是跟vuex中actions的作用差不多,发送不同的动作名称,通过配套其他函数的监听
//实现容器组件的状态(state)的改变,只不过vuex中的actions是发送动作名,redux是根据actions对象中的type的值不同,进行不同的操作

const increaseAction = { type: 'increase' };

// 定义reducer纯函数,reducer函数的作用就是,根据传过来的action和旧state的状态值
//然后根据action的type的值进行不同的操作,进行新的state的返回,从而达到UI组件(展示组件)的重新渲染
function counter(state = { count: 0 }, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return { count: count + 1 };
        default:
            return state
    }
}

// 创建store对象,可以说store是redux的核心,因为根据redux的设计理念,
//对state的操作都是根据store中的各种方法实现的,便于管理
//在这里规定使用redux中的createStore和reducer纯函数结合来得到我们想要的store
const store = createStore(counter);

//mapStateToProps是connect的第一个参数
//根据名称我们知道是把之前reducer纯函数中的state(状态)和展示组件的props(属性)进行映射
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// mapDispatchToProps是connect的第二个参数
//根据名称我们可以知道是把reducer纯函数中之前store中的dispatch方法和展示组件的props(属性)进行映射
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// 这里定义App为react-redux设计理念中的容器组件
//通过connect中传递参数和展示组件Counter相结合得出相应的容器组件App
//这里的容器组件App里面包含了展示组件Counter
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

//向目标元素渲染容器组件App
//这里的组件Provider是一个react-redux中特殊的组件
//注意:  1. Provider中有且只有一个子组件(这里就是App容器组件,不一定是容器组件,根据自己的业务需求自己操作)
//      2. 使用Provider组件的好处是,只需要给Provider组件设置属性,那么其子组件和其子组件中的子组件都可以直接使用其对应的属性
//      3. 避免了组件嵌套之后一个一个传递的复杂操作
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)