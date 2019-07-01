import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onToggle }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
