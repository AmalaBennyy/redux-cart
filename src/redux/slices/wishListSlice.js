const { createSlice } = require("@reduxjs/toolkit");


const wishListSlice =createSlice({
    name:'wishlist',
    initialState:[], //since this state have to hold more than one item
    reducers:{
        //actions
        // function to add items to wishlist array state 
        addToWishlist:(state, action)=>{
            state.push(action.payload)

        },
        ///function to remove items from wishlist array state
        removeFromwishlist : (state,action)=>{

           return state.filter(item=>item.id!==action.payload)
        }
    }

    
})

export const {addToWishlist,removeFromwishlist} =wishListSlice.actions

export default wishListSlice.reducer