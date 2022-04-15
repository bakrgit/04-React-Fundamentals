import React ,{createContext,useState} from 'react'

//1-create context
const ColorContext =createContext() ;
//-update data in context
//2-create provider 
const UseContextProvider = ({children}) => {
         
    const [data ,setSata]=useState({id:'1' ,name:'mahmoud'})

    const changeData=(id , name)=> {
        setSata({id ,name})
    }

    return (
        <ColorContext.Provider value={{data , changeData}}>
           {children}
        </ColorContext.Provider>
    )
}
//3 export context to use , provider to wrap all component
export { UseContextProvider ,ColorContext }
