import React,{useEffect,useState} from 'react'


const UseEffectExamble = () => {
const [count ,setCount]=useState(0);
        useEffect(()=>{
            console.log('helo from useeffect')
        } ,[count] )

    return (
        <div>
            <button onClick={()=> setCount(count +1)}>+</button>
            <label>{count}</label>
        </div>
    )
}

export default UseEffectExamble
