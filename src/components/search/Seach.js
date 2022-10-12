import React from 'react'
import CountryDropdown from '../countryDropdown/CountryDropdown'
import "./Search.css"

const Seach = () => {
  return (
    <div className='search-selector relative'>
      <CountryDropdown/>
      <CountryDropdown/>
      <CountryDropdown/>
      <CountryDropdown/>
      <button className='search-selector-btn'>
        Search
      </button>
    </div>
  )
}

export default Seach