import { createSlice } from "@reduxjs/toolkit";
import { housesData } from '../../../data';


const initialState={
    houses:[],
    filteredHouses:[]
}

export const houseSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{

    }
})

export default houseSlice.reducer