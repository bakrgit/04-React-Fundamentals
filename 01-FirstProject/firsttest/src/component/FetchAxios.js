import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FetchAxios = () => {
    const [state, setstate] = useState([])
    // const fetchData = async () => {
    //     await fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'GET'
    //     }).then(response => response.json()).then(data => setstate(data))
    // }

    const fetchAxios = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

        setstate(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        fetchAxios();
    }, [])
    return (
        <div>
            {state.map((item)=> {return (<h3>{item.body}</h3>)})}
        </div>
    )
}

export default FetchAxios
