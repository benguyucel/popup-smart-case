import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./thunkActions";
export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        status: "idle",
        error: ""
    }, reducers: {},
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = "pending"
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.todos = action.payload
        },
        [fetchTodos.failed]: (state, action) => {
            state.status = "failed"
            state.error = action.payload
        }
    }
})


export default todoSlice.reducer