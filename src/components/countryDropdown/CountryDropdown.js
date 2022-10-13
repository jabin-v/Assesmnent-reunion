import React, { useEffect, useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCountries, setCountry } from '../../app/features/houses/houseSlice';
import "./CountryDropdown.css"

const CountryDropdown = () => {
  const countryList=useSelector(selectAllCountries);
  const country=useSelector(state=>state.houses.country)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch=useDispatch();

  const handleCountrySelect=(e)=>{
  dispatch(setCountry(e.target.value))

  }


 
  return (
    <div className='dropdown relative '>
      <div className='dropdown-title'>
        <span className='dropdown-sub' style={{color:"#CED2DB"}}>Location</span>
        <div className='dropdown-select-container space-between'>
        <span className='dropdown-select'>{country}</span>
        {
          isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary'  onClick={()=>setIsOpen(false)}/>:<RiArrowDownSLine className='dropdown-icon-secondary' onClick={()=>setIsOpen(true)}/>
        }
        

        </div>

      </div>
      {
        isOpen &&
        <div className='dropdown-menu'>
        {
          countryList.map((country,index)=>
          <option
          className='dropdown-list'
          key={index} 
          onClick={handleCountrySelect}
          value={country} >{country}</option>
          )
        }
        </div>
      }
    </div>
  )
}

export default CountryDropdown