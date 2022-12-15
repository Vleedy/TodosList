import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TODO } from "../../models/TODO";

export const fetchToDo = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get<TODO[]>('https://6374a19f48dfab73a4e42878.mockapi.io/todos')
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить задачи')
        }
    }
)