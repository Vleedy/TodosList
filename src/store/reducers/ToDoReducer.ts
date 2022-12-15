import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TODO } from "../../models/TODO";
import { fetchToDo } from "./FetchToDo";

interface ToDoState {
    todos: TODO[],
    isLoading: boolean,
    error: string
}

interface Succes {
    id: number,
    succes: boolean
}

const initialState: ToDoState = {
    todos: [],
    isLoading: false,
    error: ''
}

export const toDoSlice = createSlice({
    name: 'ToDo',
    initialState,
    reducers: {
        todosAdding(state, action: PayloadAction<TODO>) {
           state.todos.push(action.payload);
        },
        completeToDo(state, action: PayloadAction<Succes>) {
            state.todos[action.payload.id].completed = action.payload.succes;
        },
        deleteToDo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter((item, i) => i!==action.payload)
        }
    },
    extraReducers: {
        [fetchToDo.fulfilled.type]: (state, action: PayloadAction<TODO[]>) => {
            state.isLoading = false;
            state.error = '';
            state.todos = [...state.todos, ...action.payload]
        },
        [fetchToDo.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchToDo.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        } 
    }
})

export default toDoSlice.reducer;