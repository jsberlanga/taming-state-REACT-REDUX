import React, { useContext } from "react";
import { TodosContext } from "./TodoApp";

const Todo = ({ todo }) => {
  const { dispatchTodos } = useContext(TodosContext);

  const onToggle = () =>
    dispatchTodos({
      type: todo.complete ? "INCOMPLETE_TODO" : "COMPLETE_TODO",
      id: todo.id
    });

  return (
    <div
      className={`todo ${
        todo.complete ? "todo__completed" : "todo__notcompleted"
      }`}
    >
      {todo.task}
      <button onClick={onToggle}>Complete</button>
    </div>
  );
};

export default Todo;
