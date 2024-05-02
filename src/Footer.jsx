import React from "react";

function Footer({
  itemsRemaining,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  clearCompletedTodos,
  activeFilter,
  selectAllTodos,
}) {
  return (
    <div>
      <div className="footer">
        <div>
          <p>{itemsRemaining} items left</p>
        </div>

        <div className="select-all">
          <p onClick={selectAllTodos}>Select all</p>
        </div>
        <div className="clear-completed">
          <p onClick={clearCompletedTodos}>Clear Completed</p>
        </div>
      </div>
      {<hr className="hr-line"></hr>}
      <div className="filters">
        <p
          className={activeFilter === "all" ? "active" : "filter-name"}
          onClick={showAllTodos}
        >
          All
        </p>
        <p
          className={activeFilter === "active" ? "active" : "filter-name"}
          onClick={showActiveTodos}
        >
          Active
        </p>
        <p
          className={activeFilter === "completed" ? "active" : "filter-name"}
          onClick={showCompletedTodos}
        >
          Completed
        </p>
      </div>
    </div>
  );
}

export default Footer;
