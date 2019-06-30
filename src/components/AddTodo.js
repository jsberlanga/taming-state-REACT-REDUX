import React, { useState } from "react";

const AddTodo = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e, input) => {
    e.preventDefault();
    if (!input) {
      setError("Fill out the form");
      return;
    }
    onSubmit(input);
    setInput("");
  };
  return (
    <div>
      {error && error}
      <form onSubmit={e => handleSubmit(e, input)}>
        <input
          type="text"
          onChange={e => {
            setInput(e.target.value);
            setError("");
          }}
          value={input}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
