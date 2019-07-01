import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, dispatchTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatchTodos={dispatchTodos} />
      ))}
    </div>
  );
};

export default TodoList;
