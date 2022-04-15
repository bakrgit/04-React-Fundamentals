import React,{useRef,useContext} from 'react'
import {ColorContext} from './useContext';
const UseRefExamble = () => {
    const {changeData} =useContext(ColorContext)

    const valueInput =useRef(null) ;
    const foucs=()=> {
        valueInput.current.focus() ;
        console.log(valueInput.current.value)
        changeData(Math.random() ,valueInput.current.value)
    }

    return (
        <div>
            <input  type="text" ref={valueInput}/>
            <button onClick={foucs}>Foucs</button>
        </div>
    )
}

export default UseRefExamble
