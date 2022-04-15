import React, { useState,useReducer } from 'react'
import reducerTest from '../Reducer/reducerTest'
const initialValue={
    count:0
}

const UseReducerExamble = () => {
   const  [state ,dispatch] = useReducer(reducerTest ,initialValue )

    return (
        <div>
            value is : {state.count}
            <button onClick={() => dispatch({type:'increment'})}>+</button>
            <button onClick={() => dispatch({type:'decrement'})}>-</button>
            <button onClick={() => dispatch({type:'reset'})}>reset</button>
        </div>
    )
}

export default UseReducerExamble
