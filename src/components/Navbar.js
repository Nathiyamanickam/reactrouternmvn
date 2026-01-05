import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  return (
    <nav>
    
        <NavLink id="n1" to="/">Home</NavLink>
        <NavLink id="n1" to="/Datainsert">DataInsert</NavLink>
         <NavLink id="n1" to="/View">View</NavLink>
          <NavLink id="n1" to="/Help">Help</NavLink>
          
          <NavLink id="n1" to="/ContactUs">ContactUs</NavLink>
         
         
      
    </nav>
  )
}

export default Navbar
