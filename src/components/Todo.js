import React from "react";

const Todo = ({ todo, onToggle }) => {
  return (
    <div
      className={`todo ${
        todo.complete ? "todo__completed" : "todo__notcompleted"
      }`}
    >
      {todo.task}
      <button onClick={() => onToggle(todo)}>Complete</button>
    </div>
  );
};

export default Todo;
