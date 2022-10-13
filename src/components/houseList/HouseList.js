import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import House from '../house/House'
import { housesData } from '../../data';
import "./HouseList.css"
import { setFilter } from '../../app/features/houses/houseSlice';

const HouseList = () => {

  const houses=useSelector((state)=>state.houses.houses)


  const dispatch=useDispatch(houses);

 useEffect(()=>{   
dispatch(setFilter(houses))
  },[])

  const filter=useSelector((state)=>state.houses.filteredHouses)


  console.log(filter)


  
  return (
    <div className='house-list'>
      
      {
        filter?.map((house)=><House house={house} key={house.id}/>)
      }
      

      
  
    </div>
  )

    
  
}

export default HouseList