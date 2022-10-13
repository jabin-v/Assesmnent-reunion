import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProduct } from '../../app/features/houses/houseSlice'
import CountryDropdown from '../countryDropdown/CountryDropdown'
import PriceDropdown from '../PriceDropdown/PriceDropdown'
import PropertyDropdown from '../PropertyDropdown/PropertyDropdown'
import "./Search.css"

const Seach = () => {
  const dispatch=useDispatch()
  const handleSearch=()=>{

    dispatch(filterProduct())

  }
  return (
    <div className='search-selector relative'>
      <CountryDropdown/>
      <PriceDropdown/>
      <PropertyDropdown/>
      <button className='search-selector-btn' onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default Seach