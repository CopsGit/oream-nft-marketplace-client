import {configureStore} from '@reduxjs/toolkit'

import authReducer from "./slice/authSlice";
import itemReducer from "./slice/itemSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        item: itemReducer,
    },
})