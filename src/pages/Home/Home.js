import React from 'react';
import { useSelector } from 'react-redux';
import Seach from '../../components/search/Seach';
import SearchBar from "../../components/searchBar/SearchBar"
import "./Home.css"
const Home = () => {

  const houses=useSelector(state =>state.houses)
  return (
    <div>
      <SearchBar/>
      <Seach/>
    </div>
  )
}

export default Home