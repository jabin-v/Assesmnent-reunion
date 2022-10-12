import { createSlice } from "@reduxjs/toolkit";
import { housesData } from '../../../data';


const initialState={
    houses:housesData,
    filteredHouses:[],
    country:'Location (any)',
    property:'Property type (any)',
    price:'Price range (any)'



}

export const houseSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{

    }
})

export default houseSlice.reducer