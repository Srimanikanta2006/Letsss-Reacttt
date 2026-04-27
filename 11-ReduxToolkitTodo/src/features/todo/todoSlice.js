import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "Hello World" }],
};

export const todoSlice = createSlice({
  // objects
  name: "todo", // name of the slice, remember the name coz same name appears in chrome extension (redux toolkit)
  initialState,
  reducers: {
    //property:function
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; // action creators
export default todoSlice.reducer; // reducer
