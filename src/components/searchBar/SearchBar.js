import React from 'react'
import {IoIosArrowDown} from 'react-icons/io';
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <h2>Search properties to rent</h2>
      <div className='search-wrapper'>
      <input className="search" placeholder="Search" type="text" />
      <IoIosArrowDown/>
      </div>
    </div>
  )
}

export default SearchBar