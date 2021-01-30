import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../Redux/actions/ReducerActions'

const CountBtn = (props) => {
    return (
        <div>
            <button onClick={() => { props.add() }} >add</button>
            <button onClick={() => { props.sub() }} >sub</button>
        </div>
    );
};

const myaction = (dispatch) => {

    return {
        add: () => dispatch(increment()),
        sub: () => dispatch(decrement())
    }
}

export default connect(null, myaction)(CountBtn);