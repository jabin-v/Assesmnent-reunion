import React, { useEffect, useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProperties,setProperty } from '../../app/features/houses/houseSlice';


const PropertyDropdown = () => {
  const propertyList=useSelector(selectAllProperties);
  const prop=useSelector(state=>state.houses.property)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch=useDispatch();

  const handlePropertyChange=(e)=>{
  dispatch(setProperty(e.target.value))
  setIsOpen(false)

  }


 
  return (
    <div className='dropdown relative '>
      <div className='dropdown-title'>
        <span className='dropdown-sub' style={{color:"#CED2DB"}}>Property Type</span>
        <div className='dropdown-select-container space-between'>
        <span className='dropdown-select'>{prop}</span>
        {
          isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary'  onClick={()=>setIsOpen(false)}/>:<RiArrowDownSLine className='dropdown-icon-secondary' onClick={()=>setIsOpen(true)}/>
        }
        

        </div>

      </div>
      {
        isOpen &&
        <div className='dropdown-menu'>
        {
          propertyList.map((property,index)=>
          <option
          className='dropdown-list'
          key={index} 
          onClick={handlePropertyChange}
          value={property} >{property}</option>
          )
        }
        </div>
      }
    </div>
  )
}

export default PropertyDropdown