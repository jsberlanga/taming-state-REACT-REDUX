import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onToogleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToogleComplete={onToogleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
