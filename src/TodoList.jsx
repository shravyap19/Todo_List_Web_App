import React from "react";

function TodoList({ items, removeTodo, toggleCompletion, isDarkMode }) {
  return (
    <div>
      <ul className="todo-list">
        {items.map((item, index) => (
          <React.Fragment>
            <li key={item.id}>
              <input
                type="checkbox"
                onChange={() => toggleCompletion(item.id)}
                checked={item.completed}
                className="checkbox-btn"
              />
              <span
                className={`todo-text ${
                  item.completed ? (isDarkMode ? "completed" : "lightmode") : ""
                } ${!isDarkMode ? "todo-text-light-mode" : ""}`}
              >
                {item.text}
              </span>
              <img
                onClick={() => removeTodo(item.id)}
                src="./icon-cross.svg"
                alt="clear-todo-item"
              />
            </li>
            {<hr className="hr-line" />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
