import React from 'react';
import { useSelector } from 'react-redux';
import "./Home.css"
const Home = () => {

  const houses=useSelector(state =>state.houses)
  return (
    <div>Home
      {console.log(houses)}
    </div>
  )
}

export default Home