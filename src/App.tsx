import React, { useState } from "react";
import { TodoList } from "./TodoList/TodoList";

import { TodoForm } from "./TodoList/TodoForm";

type Todo = {
  text: string;
  complete: boolean;
};

const initialTodos: Array<Todo> = [
  { text: " Walk the dog", complete: true },
  { text: "Write an app", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;
