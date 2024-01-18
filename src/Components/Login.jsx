import React, { useContext } from 'react'
import { UserContext } from '../Context'


const Login = () => {
    const context =  useContext(UserContext)
    const { firstName, lastName} = context
  return (
    <div className='text-center'>
        <div> Login Page </div>
        <div> 
            <h1>FirstName : {firstName}  </h1>
            <h1>LastName: {lastName} </h1>
        </div>
    </div>
  )
}

export default Login