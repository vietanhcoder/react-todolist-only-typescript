import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" onChange={handleChange} value={newTodo} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
