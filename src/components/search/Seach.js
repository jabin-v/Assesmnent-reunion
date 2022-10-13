import React from 'react'
import CountryDropdown from '../countryDropdown/CountryDropdown'
import PriceDropdown from '../PriceDropdown/PriceDropdown'
import PropertyDropdown from '../PropertyDropdown/PropertyDropdown'
import "./Search.css"

const Seach = () => {
  return (
    <div className='search-selector relative'>
      <CountryDropdown/>
      <PriceDropdown/>
      <CountryDropdown/>
      <PropertyDropdown/>
      <button className='search-selector-btn'>
        Search
      </button>
    </div>
  )
}

export default Seach