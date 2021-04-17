import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import statusReducer from './statusSlice';

export default configureStore({
    reducer: { 
        user: userReducer,
        status: statusReducer,
    }
})