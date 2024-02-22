import restaurantSlice from "./restaurantSlice"
import { configureStore } from "@reduxjs/toolkit"


const store = configureStore({
    reducer: {
        restaurantSlice: restaurantSlice

    }
})
export default store