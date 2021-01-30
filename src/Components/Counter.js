import React from 'react';
import {connect} from 'react-redux'
import {increment,decrement} from '../Redux/actions/ReducerActions'

const Counter = (props) => {
    return (
        <div>
            <h1>Counter : {props.count}</h1>
        </div>
    );
};
const mapstate=(state)=>{
    return{
    count:state.CounterReducer.count
    }
}

export default connect(mapstate) (Counter);