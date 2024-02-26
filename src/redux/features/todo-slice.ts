import { createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  name: string;
  done: boolean;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: [],
};

export const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const t = state.list.find((todo) => todo.id === action.payload);
      if (t) {
        t.done = !t.done;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todo.actions;
export default todo.reducer;
