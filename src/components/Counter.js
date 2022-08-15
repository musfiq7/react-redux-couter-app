import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementAction, decrementAction, resetAction} from '../redux-service/actions/counterActions'

function Counter() {
    const count = useSelector(state => state.count)
    // console.log(count);
    

    const dispatch  = useDispatch()
    
    const incrementHandler = () => {
        dispatch(incrementAction());
        
    }
    const decrementHandler = () => {
        dispatch(decrementAction());
        
    }
    const resetHandler = () => {
        dispatch(resetAction());
        
    }
       
    
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count:  {count}</h3>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler}>decrement</button>
            <button onClick={resetHandler}> reset </button>
        </div>
    )
}

export default Counter
