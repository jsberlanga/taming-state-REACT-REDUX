import React, { useState, useContext } from "react";
import { TodosContext } from "./TodoApp";

const AddTodo = ({ todos }) => {
  const { dispatchTodos, todos: contextTodos } = useContext(TodosContext);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e, input) => {
    e.preventDefault();

    if (contextTodos.find(todo => todo.task === input)) {
      return setError("This todo is already in the list!");
    }
    if (!input) {
      return setError("Fill out the form");
    }

    dispatchTodos({ type: "ADD_TODO", task: input });
    setInput("");
  };

  return (
    <div>
      {error && error}
      <form onSubmit={e => onSubmit(e, input)}>
        <input
          type="text"
          onChange={e => {
            setInput(e.target.value);
            setError("");
          }}
          value={input}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
