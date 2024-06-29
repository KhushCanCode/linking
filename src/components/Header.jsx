import React from 'react'
import {Link} from 'react-router-dom';

function Header() {

  return (
     <div 
     className="header bg-white  m-2 rounded-xl 
     flex items-center justify-between px-11 shadow-md">
        <div className="logo text-4xl font-bold text-cyan-800 ml-16">LOGO</div>

        <div className="nav flex items-center gap-11 text-2xl font-semibold text-cyan-600 ">
        <Link to="/" className="home  hover:underline active:text-red-500">Home</Link>
        <Link to="/dashboard" className="dashboard hover:underline active:text-red-500">Dashboard</Link>
        <Link to="/signin" className="signin hover:underline cursor-pointer active:text-red-500" >Sign In</Link>
        <Link to="/signup" className="signup  hover:underline cursor-pointer  active:text-red-500">Sign Up</Link>
        </div>
     
        
     </div>
  )
}

export default Header
