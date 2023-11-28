import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //actions
        //function to add items to cart array

     addToCart:(state,action)=>{
        state.push(action.payload)
     },
     //function to remove items from cart
     removeFromCart : (state,action)=>{
       return state.filter(item=>item.id!==action.payload)
     }

    }
})

export const {addToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer