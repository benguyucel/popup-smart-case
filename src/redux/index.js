import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice,
        user: userSlice
    }
})