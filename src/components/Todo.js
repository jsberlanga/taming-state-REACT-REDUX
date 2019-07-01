import React from "react";

const Todo = ({ todo, dispatchTodos }) => {
  const onToggle = todo => {
    dispatchTodos({
      type: todo.complete ? "INCOMPLETE_TODO" : "COMPLETE_TODO",
      id: todo.id
    });
  };

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
