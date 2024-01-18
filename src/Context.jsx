import React, { createContext, useState } from 'react'

const UserContext =  createContext()

const ContextProvider = ({children}) => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const contextValues = { 
      firstName, 
      lastName,
      setfirstName,
      setlastName
    }
  return (
    <UserContext.Provider value={contextValues}> 
        {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
export {UserContext}