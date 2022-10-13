import React from 'react'
import {MdFavoriteBorder} from "react-icons/md"
import {IoBedOutline} from "react-icons/io5"
import {TbBath} from "react-icons/tb"
import {BiArea} from "react-icons/bi"


import "./House.css"

const House = ({house}) => {

  return (
    <div className='house-card'>
        <img src={house.imageLg}/>
        <div className='house-detail'>
            <div className='house-price'>
                <div className='price'>$ {house.price} <span className='month'>/Month</span> </div>

                <MdFavoriteBorder className='fav-icon'/>  
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