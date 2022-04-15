import React, { useState, useMemo } from 'react'


const UseMemoExamble = () => {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const [counter, setCounter] = useState(0)
    const [test, setTest] = useState(0)

    const result = useMemo(() => {
        return (<div style={{ color: randomColor }}>
            value is {counter} := {counter * 2}
        </div>)
    }, [counter])

    return (
        <div>
            {result}
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(counter + 1)} >+</button>
            <button onClick={() => setTest(test + 1)}>test</button>
        </div>
    )
}


export default UseMemoExamble
