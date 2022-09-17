import { createSlice } from "@reduxjs/toolkit";
import { addNewTodo, deleteTodo, editTodo, fetchTodos, toggleTodos } from "./thunkActions";
export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        listStatus: "idle",
        error: "",
        currentPage: 1,
        postsPerPage: 5,
        filterStatus: ""
    }, reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setFilterStatus: (state, action) => {
            state.filterStatus = action.payload
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = "pending"
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.todos = action.payload.reverse()
        },
        [fetchTodos.failed]: (state, action) => {
            state.status = "failed"
            state.error = action.payload
        },
        [toggleTodos.fulfilled]: (state, action) => {
            const { id } = action.payload
            const currentTodos = state.todos.find(item => item.id === id)
            currentTodos.isCompleted = !currentTodos.isCompleted
        },
        [addNewTodo.pending]: (state, action) => {
            state.status = "pending"
        },
        [addNewTodo.fulfilled]: (state, action) => {
            state.todos.unshift(action.payload)
            state.status = "succeeded"
        },
        [addNewTodo.failed]: (state, action) => {
            state.error = action.payload
            state.status = "failed"
        },

        [editTodo.pending]: (state, action) => {
            state.status = "pending"
        },
        [editTodo.fulfilled]: (state, action) => {
            const { id, content } = action.payload
            const todoItem = state.todos.find(item => item.id === id)
            todoItem.content = content
            state.status = "succeeded"
        },
        [editTodo.failed]: (state, action) => {
            state.error = action.payload
            state.status = "failed"
        },

        [deleteTodo.pending]: (state, action) => {
            state.status = "pending"
        },
        [deleteTodo.fulfilled]: (state, action) => {
            const { id } = action.payload
            const todoItems = state.todos.filter(item => item.id !== id)
            state.todos = todoItems
            state.status = "succeeded"
        },
        [deleteTodo.failed]: (state, action) => {
            state.error = action.payload
            state.status = "failed"
        },
    }
})

export const curretPosts = state => state.todos.todos.
    filter(item =>
        state.todos.filterStatus === "" ? item :
            item.isCompleted === state.todos.filterStatus
    )
    .slice(
        ((state.todos.currentPage * state.todos.postsPerPage) - state.todos.postsPerPage)
        , (state.todos.currentPage * state.todos.postsPerPage)
    )
export const getCurrentPostsLength = state => state.todos.todos.filter(item =>
    state.todos.filterStatus === "" ? item :
        item.isCompleted === state.todos.filterStatus
).length

export const { setCurrentPage ,setFilterStatus} = todoSlice.actions
export default todoSlice.reducer