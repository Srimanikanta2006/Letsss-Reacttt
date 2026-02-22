import { createContext, use, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    //varible....array....objects....
    //is a Property.
    {
      id: 1,
      todo: "Learn React",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
  //then functionalities... in this no deffinitions...just the name of the function and its parameters.
});
export const TodoProvider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};
