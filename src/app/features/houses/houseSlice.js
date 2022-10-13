import { createSlice } from "@reduxjs/toolkit";
import { housesData } from '../../../data';

const isDefault = (str) => {
    return str.split(' ').includes('(any)');
  };


const initialState={
    houses:housesData,
    filteredHouses:[],
    country:'Location (any)',
    property:'Property type (any)',
    price:'Price range (any)',
    countries:[],
    favourites:[]



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
    },
    filterProduct:(state,_)=>{
    // get first string (price) and parse it to number
    const minPrice = parseInt(state.price.split(' ')[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(state.price.split(' ')[2]);

    const newHouses = state.houses.filter((house) => {
        const housePrice = parseInt(house.price);
        // all values are selected
        if (
          house.country === state.country &&
          house.type === state.property &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        ) {
          return house;
        }
        // all values are default
        if (isDefault(state.country) && isDefault(state.property) && isDefault(state.price)) {
          return house;
        }
        // country is not default
        if (!isDefault(state.country) && isDefault(state.property) && isDefault(state.price)) {
          return house.country === state.country;
        }
        // property is not default
        if (!isDefault(state.property) && isDefault(state.country) && isDefault(state.price)) {
          return house.type === state.property;
        }
        // price is not default
        if (!isDefault(state.price) && isDefault(state.country) && isDefault(state.property)) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house;
          }
        }
        // country and property is not default
        if (!isDefault(state.country) && !isDefault(state.property) && isDefault(state.price)) {
          return house.country === state.country && house.type === state.property;
        }
        // country and price is not default
        if (!isDefault(state.country) && isDefault(state.property) && !isDefault(state.price)) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.country === state.country;
          }
        }
        // property and price is not default
        if (isDefault(state.country) && !isDefault(state.property) && !isDefault(state.price)) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.type === state.property;
          }
        }

        
      });

      state.filteredHouses=newHouses

    
    },
    addToFavourite:(state,action)=>{


       const id=action.payload.id


        for(var i = 0; i < state.favourites.length; i++) {
            if (state.favourites[i].id === id) {
                return
            }
        }

        state.favourites.push(action.payload)

    }


    }
})

export const {setCountry,setPrice,setProperty,setFilter,filterProduct,addToFavourite } = houseSlice.actions;

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