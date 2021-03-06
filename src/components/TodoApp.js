import React, { useState, useReducer, createContext } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";
import initialTodos from "../todos";

const TodosContext = createContext(null);

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

  return (
    <TodosContext.Provider value={{ dispatchTodos, todos }}>
      <h1>{props.title}</h1>
      <AddTodo />
      <TodoList todos={filteredTodos} />
      <Filter dispatchFilter={dispatchFilter} />
    </TodosContext.Provider>
  );
};

export default TodoApp;
export { TodosContext };
