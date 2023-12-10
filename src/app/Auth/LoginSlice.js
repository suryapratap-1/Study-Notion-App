import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "user",
    initialState: { email : "", password : "" },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email,
            state.password = action.payload.password
        },
        logout: (state) => {
            state.email = "",
            state.password = ""
        }
    }
})

export const { login, logout } = LoginSlice.actions;
export default LoginSlice.reducer;