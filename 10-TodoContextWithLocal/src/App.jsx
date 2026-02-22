import "./App.css";
import { TodoProvider } from "./Contexts/TodoContext";
import { useState } from "react";

function App() {
  const { todos, setTodos } = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    //here we are adding the new todo to the previous list of todos, and we are also giving it a unique id using Date.now() function.
  };
  const updateTodo = (id, todo) => {
    setTodos(
      (prev) =>
        prev.map((prevTodo) => {
          prevTodo.id === id ? todo : prevTodo;
        }),
      //here we are updating the todo with the given id, and we are returning the updated todo if the id matches, otherwise we are returning the previous todo.
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    //here we are deleting the todo with the given id, and we are returning the list of todos that do not have the given id.
  };
  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
    //here we are toggling the completed property of the todo with the given id, and we are returning the updated todo if the id matches, otherwise we are returning the previous todo.
  };
  //here the name should be same as the one in the context provider, then the functionality works.
  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

          <div className="w-full max-w-sm mx-auto"></div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
