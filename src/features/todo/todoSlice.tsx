import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    { id: 1, title: "Have breakfast" },
    { id: 2, title: "Learn Redux Toolkit" }
  ],
  reducers: {
    addTodo: (state,action) => {
      state.push(action.payload)
    },
    removeTodo: (state,action) => {      
      return state.filter((arrow) => arrow.id !== action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer