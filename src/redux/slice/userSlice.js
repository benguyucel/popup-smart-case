import { createSlice } from "@reduxjs/toolkit";
import { getUserFromStorage } from "../../utilities/userCheck";


const userSlice = createSlice({
    name: "user",
    initialState: {
        username: getUserFromStorage() === null ? "" : getUserFromStorage(),
        isLoggin: getUserFromStorage() === null ? false : true
    }, reducers: {
        setUser: (state, action) => {
            state.username = action.payload
            state.isLoggin = true
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer