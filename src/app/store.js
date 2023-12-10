import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from './Auth/LoginSlice';

export const store = configureStore({
    reducer: {
        user: LoginSlice
    }
})