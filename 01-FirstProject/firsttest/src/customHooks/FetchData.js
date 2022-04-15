import React,{useEffect,useState} from 'react'

const useFetchData = (url) => {
    const [state, setstate] = useState([])
    useEffect(() => {

        fetch(url).then(res => res.json()).then(data => setstate(data))

    }, [])
    return [state]
}

export default useFetchData
