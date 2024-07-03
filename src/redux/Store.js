import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice"

const Store = configureStore({
    reducer : {
    userDetails : userSlice
    }
})
export default Store;