import { createSlice } from "@reduxjs/toolkit";
import { housesData } from '../../../data';


const initialState={
    houses:housesData,
    filteredHouses:[],
    country:'Location (any)',
    property:'Property type (any)',
    price:'Price range (any)',
    countries:[]



}

export const houseSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
    setCountry:(state,action)=>{
        state.country=action.payload
        
    },
    setPrice:(state,action)=>{
        state.price=action.payload
        
    },
    setProperty:(state,action)=>{
        state.property=action.payload
        
    },
    setFilter:(state,action)=>{
        state.filteredHouses=action.payload
    }

    }
})

export const {setCountry,setPrice,setProperty,setFilter } = houseSlice.actions;

export const selectAllCountries = (state) =>{
    const allCountries = housesData.map((house) => {
        return house.country;
      });
  
      // remove duplicates
      const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
  
      // set countries state

      return uniqueCountries;
    
}

export const selectAllProperties=()=>{
    const allProperties = housesData.map((house) => {
        return house.type;
      });

      const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

      return uniqueProperties;

}


export default houseSlice.reducer