import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        wishListReducer:wishListSlice,
        cartReducer : cartSlice

    }
})

export default store