import React from "react";

const Filter = ({ dispatchFilter }) => {
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
    <div>
      <button onClick={onShowAll}>Show All</button>
      <button onClick={onShowCompleted}>Show Completed</button>
      <button onClick={onShowIncompleted}>Show Incompleted</button>
    </div>
  );
};

export default Filter;
