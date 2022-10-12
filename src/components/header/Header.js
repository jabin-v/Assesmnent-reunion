import React from 'react'
import "./Header.css"
import {BsHouseDoorFill} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';


const Header = () => {
  return (
    <div className='header'>
      <div className='header-right'>
      <div className='header-logo'>
        <BsHouseDoorFill className='icons'/>
       <p>Estatery</p>
      </div>
      <div className='header-options'>
        <span className='active'>Rent</span>
        <span>Buy</span>
        <span>Sell</span>
        <span className='flex'>Manage Property <IoIosArrowDown/></span>
        <span className='flex'>Resources <IoIosArrowDown/></span>
      </div>

      </div>
     
      
      <div className='header-login'>
        <span className='header-login-btn'>Login</span>
        <span className='header-login-btn'>Sign Up</span>

      </div>
    </div>
  )
}

export default Header