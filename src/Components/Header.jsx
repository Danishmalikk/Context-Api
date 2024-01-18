import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-row justify-between text-red-700 p-8'>
        <Link to={'/'}> Logo </Link>
        <div className='flex gap-6'> 
        <Link to={'/'} > Home </Link>
        <Link to={'/useRef'} > useRef Demo </Link>
        <Link to={'/form'} > Form </Link>
        <Link to={'/data'} > Data </Link>
        <Link to={'/login'}> Login </Link>
        </div>
    </div>
  )
}

export default Header