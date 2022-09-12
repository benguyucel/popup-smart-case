import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let config = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
};
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const result = await axios.get(`${process.env.REACT_APP_URL_ENDPOINT}/todos`)
    return result.data
},config)
