import {INCREMENT,DECREMENT} from '../types';

const initialstate={
    count:0
}

const CounterReducer=(state=initialstate,action)=>{
    switch(action.type)
    {
        case INCREMENT:
            return{
                count:  state.count+1
            }
        case DECREMENT:
           return {
                 count: state.count-1
            }
        default:
            return state;
    }

}

export default CounterReducer;