import { configureStore, createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    },
});
 
const todoStore = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});
 
export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
 
export default todoStore;