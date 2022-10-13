import React, { useEffect, useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from '../../app/features/houses/houseSlice';
import "./PriceDropdown.css"

const PriceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch=useDispatch()
  const price=useSelector(state=>state.houses.price)

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '20000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ];

  const handleCountrySelect=(e)=>{

    dispatch(setPrice(e.target.value))
  

  }


 
  return (
    <div className='dropdown relative '>
      <div className='dropdown-title'>
        <span className='dropdown-sub' style={{color:"#CED2DB"}}>Price</span>
        <div className='dropdown-select-container space-between'>
        <span className='dropdown-select'>{price}</span>
        {
          isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary'  onClick={()=>setIsOpen(false)}/>:<RiArrowDownSLine className='dropdown-icon-secondary' onClick={()=>setIsOpen(true)}/>
        }
        

        </div>

      </div>
      {
        isOpen &&
        <div className='dropdown-menu'>
        {
          prices.map((price,index)=>
          <option
          className='dropdown-list'
          key={index} 
          onClick={handleCountrySelect}
          value={price.value} >{price.value}</option>
          )
        }
        </div>
      }
    </div>
  )
}

export default PriceDropdown