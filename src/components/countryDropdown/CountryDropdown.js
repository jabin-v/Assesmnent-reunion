import React, { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import "./CountryDropdown.css"

const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='dropdown relative '>
      <div className='dropdown-title'>
        <span className='dropdown-sub' style={{color:"#CED2DB"}}>Location</span>
        <div className='dropdown-select-container space-between'>
        <span className='dropdown-select'>New York ,USA</span>
        {
          isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary'  onClick={()=>setIsOpen(false)}/>:<RiArrowDownSLine className='dropdown-icon-secondary' onClick={()=>setIsOpen(true)}/>
        }
        

        </div>

      </div>
      {
        isOpen &&
        <ul className='dropdown-menu'>
        <li>India </li>
        <li>India </li>
        <li>India </li>
        </ul>
      }
    </div>
  )
}

export default CountryDropdown