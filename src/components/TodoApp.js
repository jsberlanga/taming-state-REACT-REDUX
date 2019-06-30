import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import initialTodos from "../todos";

const TodoApp = props => {
  const [todos, setTodos] = useState(initialTodos);

  const onToogleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  const onSubmit = input => {
    if (!todos.some(todo => todo.task === input)) {
      const newTodo = {
        id: Math.random()
          .toFixed(10)
          .replace("0.", ""),
        task: input,
        complete: false
      };
      setTodos([newTodo, ...todos]);
    } else {
      alert("This todo is already in the list!");
    }
  };

  return (
    <>
      <h1>{props.title}</h1>
      <AddTodo onSubmit={onSubmit} />
      <TodoList todos={todos} onToogleComplete={onToogleComplete} />
    </>
  );
};

export default TodoApp;
