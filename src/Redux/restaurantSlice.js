import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
// for calling api in redux/slice we use thunk 
// thunk is a method provided by redux to make api calls
// api functions are asynchronous function so thunk make usse of connsept the promise

// function to call API
 export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
   const result=axios.get('/restaurant.json').then(Response=>Response.data)
   console.log("result in slice");
   console.log(result);
   return result;
 
})  

const restaurantSlice= createSlice({
    name:"restaurantList",
    initialState:{
        loading:false, 
        allRestaurant:[],
        Error:"",
        searchRestaurant:[],

    },
    extraReducers:(Builder)=>{
        Builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true;
        })
        Builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false;
            state.allRestaurant= action.payload
            state.searchRestaurant = action.payload
            state.Error=""
        })
        Builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false;
            state.allRestaurant=[];
            state.Error=action.error.message
        })
    },
    reducers:{
        search:(state,action)=>{
            state.allRestaurant.restaurants= state.searchRestaurant.restaurants.filter( item=>item.neighborhood.toLowerCase().includes(action.payload))                
        }
    }

})

export default restaurantSlice.reducer;
export const {search}= restaurantSlice.actions