import React from 'react'
import { useSelector } from 'react-redux'
import House from '../../components/house/House';
import "./Favourites.css"

const Favourites = () => {
  const favourites=useSelector((state)=>state.houses.favourites);




  return (
    <>
    <h3>Favourites</h3>
    <div className='favourite-list'>
      

       {
        favourites.length ===0  ? <p>Nothing in your favourite list</p> :favourites?.map((house)=><House house={house} key={house.id} fav/>)
      }
    </div>
    </>
  )
}

export default Favourites