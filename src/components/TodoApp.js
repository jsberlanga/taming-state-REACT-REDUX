import React, { useState, useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import initialTodos from "../todos";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETED":
      return "COMPLETED";
    case "SHOW_INCOMPLETED":
      return "INCOMPLETED";
    default:
      return state;
  }
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({
        id: Math.random(),
        task: action.task,
        complete: false
      });

    case "COMPLETE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });

    case "INCOMPLETE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const TodoApp = props => {
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos);

  const onSubmit = input => {
    if (todos.find(todo => todo.task === input)) {
      return alert("This todo is already in the list!");
    }
    dispatchTodos({ type: "ADD_TODO", task: input });
  };

  const onToggle = todo => {
    console.log(todo);
    dispatchTodos({
      type: todo.complete ? "INCOMPLETE_TODO" : "COMPLETE_TODO",
      id: todo.id
    });
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "COMPLETED" && todo.complete) {
      return true;
    }
    if (filter === "INCOMPLETED" && !todo.complete) {
      return true;
    }
  });

  // FILTERS
  const onShowAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };
  const onShowCompleted = () => {
    dispatchFilter({ type: "SHOW_COMPLETED" });
  };
  const onShowIncompleted = () => {
    dispatchFilter({ type: "SHOW_INCOMPLETED" });
  };

  return (
    <>
      <h1>{props.title}</h1>

      <AddTodo onSubmit={onSubmit} />

      <TodoList todos={filteredTodos} onToggle={onToggle} />
      <button onClick={onShowAll}>Show All</button>
      <button onClick={onShowCompleted}>Show Completed</button>
      <button onClick={onShowIncompleted}>Show Incompleted</button>
    </>
  );
};

export default TodoApp;
