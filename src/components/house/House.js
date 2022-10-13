import React from 'react'
import {MdFavoriteBorder} from "react-icons/md"
import {IoBedOutline} from "react-icons/io5"
import {TbBath} from "react-icons/tb"
import {BiArea} from "react-icons/bi"


import "./House.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToFavourite } from '../../app/features/houses/houseSlice'


const House = ({house,fav}) => {
    const favourites=useSelector((state)=>state.houses.favourites)

    console.log(favourites)

    const dispatch=useDispatch();
     
    let inMyList=false;
    favourites.map((item)=>{
        if(item.id ===house.id){
            inMyList=true
        }
        
    })


    const handleFavourite=(data)=>{

        dispatch(addToFavourite(data))

        console.log(data)

    }

  return (
    <div className='house-card'>
        <img src={house.imageLg}/>
        <div className='house-detail'>
            <div className='house-price'>
                <div className='price'>$ {house.price} <span className='month'>/Month</span> </div>

               {!fav && <MdFavoriteBorder className={`${inMyList ? "fav-icon active-fav" :"fav-icon"}`} onClick={()=>handleFavourite(house)}/> } 
            </div>
            <span className='house-name'>{house.name}</span>
            <span className='house-address'>{house.address}</span>
            <div className="room-detail-wrapper">
            <div className='room-detail'>
              <div className='room-bedroom'>
              <IoBedOutline className='icons'/>
               <span> {house.bedrooms} Beds</span>
              </div>

            </div>
            <div className='room-detail'>
              <div className='room-bedroom'>
              <TbBath className='icons'/>
               <span> {house.bathrooms} Bathrooms</span>
              </div>

            </div>
            <div className='room-detail'>
              <div className='room-bedroom'>
              <BiArea className='icons'/>
               <span> {house.surface}</span>
              </div>

            </div>
            </div>

        </div>
        
    </div>
  )
}

export default House