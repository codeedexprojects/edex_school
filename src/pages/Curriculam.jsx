import React from 'react'
import { Link } from 'react-router-dom'
import './Curiculam.css'

function Curriculam() {
  return (
    <div>
          <nav className="navbar">
      <div className="navbar-left">
        <h2 className='head1'>EDEX</h2>
      </div>
      <div className="navbar-right">
        <h3 ><Link to='/'>Home</Link></h3>
        <h3 ><Link to='/curiculam'>Curriculam</Link></h3>
        <h3 ><Link to='/contact'>Contact</Link></h3>
        <h3><Link to='/about'>About Us</Link></h3>
      </div>
    </nav>

      
    </div>
  )
}

export default Curriculam
