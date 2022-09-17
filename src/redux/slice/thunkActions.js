import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (page = 1) => {
    // let pages = `&page=${page}&limit=5`;
    const result = await axios.get(`${process.env.REACT_APP_URL_ENDPOINT}/todos`)
    return result.data
})
export const toggleTodos = createAsyncThunk("todos/toggleTodos", async (todo) => {
    const { id, isCompleted } = todo
    const completed = !isCompleted;
    const result = await axios.put(`${process.env.REACT_APP_URL_ENDPOINT}/todos/${id}`, { isCompleted: completed })
    return result.data
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (todo) => {
    const result = await axios.post(`${process.env.REACT_APP_URL_ENDPOINT}/todos`, todo)
    console.log(result.data)
    return result.data
})


export const editTodo = createAsyncThunk('todos/editTodo', async (todo) => {
    const { id, content, isCompleted } = todo
    const result = await axios.put(`${process.env.REACT_APP_URL_ENDPOINT}/todos/${id}`, { content, isCompleted })
    return result.data
})


export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    const result = await axios.delete(`${process.env.REACT_APP_URL_ENDPOINT}/todos/${id}`)
    return result.data
})
