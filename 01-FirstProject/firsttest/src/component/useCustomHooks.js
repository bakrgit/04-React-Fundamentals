import React,{useEffect,useState} from 'react'
import useFetchData from '../customHooks/FetchData'
const UseCustomHooks = () => {
   const [state] =useFetchData('https://jsonplaceholder.typicode.com/todos/')
    return (
        <div>
            {state.map((item)=> {
                return (<h1>{item.title}</h1>)
            })}
        </div>
    )
}

export default UseCustomHooks
