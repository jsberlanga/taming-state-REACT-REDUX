import React from "react";

const Todo = ({ todo, onToogleComplete }) => {
  return (
    <div
      className={`todo ${
        todo.complete ? "todo__completed" : "todo__notcompleted"
      }`}
    >
      {todo.task}
      <button onClick={() => onToogleComplete(todo.id)}>Complete</button>
    </div>
  );
};

export default Todo;
