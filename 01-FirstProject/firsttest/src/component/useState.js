import React ,{useState} from 'react'

const StateExamble = () => {
    const [count,setCount] =useState(0) ;
    const [text,setText] =useState('text') ;

  const handleInput=(e)=> {
     setText(e.target.value)
     console.log(text)
  }
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <label>{text} is {count}</label>

            <input type="text" value={text} onChange={handleInput}/>
        </div>
    )
}

export default StateExamble
