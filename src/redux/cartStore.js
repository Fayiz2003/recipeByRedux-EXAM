import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slices/recipeSlice'

const cartStore = configureStore({
    reducer :{
          recipeReducer : recipeSlice,
    }
})

export default cartStore