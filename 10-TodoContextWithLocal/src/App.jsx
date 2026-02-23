import "./App.css";
import { TodoForm } from "./Components";
import { TodoProvider } from "./Contexts/TodoContext";
import { use, useEffect, useState } from "react";
import TodoItem from "./Components/TodoItem";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    //here we are adding the new todo to the previous list of todos, and we are also giving it a unique id using Date.now() function.
  };
  const updateTodo = (id, todo) => {
    setTodos(
      (prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
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

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //we can use many useEffects.
  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
