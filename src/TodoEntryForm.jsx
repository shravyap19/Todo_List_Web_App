import { useState } from "react";
import Footer from "./Footer";
import TodoList from "./TodoList";

function TodoEntryForm({ isDarkMode }) {
  let [todo, setTodo] = useState("");
  let [itemsRemaining, setItemsRemaining] = useState(0);
  let [todoList, setTodoList] = useState([]);
  let [filter, setFilter] = useState("all");

  function toggleCompletion(todoId) {
    setTodoList((prevTodos) => {
      let newItemsRemaining = prevTodos.filter(
        (todo) => !todo.completed
      ).length;
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === todoId) {
          const isNowComplated = !todo.completed;
          if (isNowComplated) {
            newItemsRemaining--;
          } else {
            newItemsRemaining++;
          }
          return { ...todo, completed: isNowComplated };
        }
        return todo;
      });
      setItemsRemaining(newItemsRemaining);
      return updatedTodos;
    });
  }

  function removeTodo(todoId) {
    setTodoList(() => {
      const newTodos = todoList.filter((todo) => todo.id !== todoId);
      setItemsRemaining(newTodos.filter((todo) => !todo.completed).length);
      return newTodos;
    });
  }

  function clearCompletedTodos() {
    setTodoList((prevTods) => {
      const newTodos = prevTods.filter((todo) => !todo.completed);
      setItemsRemaining(newTodos.length);
      return newTodos;
    });
  }

  function handleInputChange(e) {
    setTodo(e.target.value);
  }
  function addTodoList() {
    setTodoList((prevTodos) => {
      const newTodos = [
        ...prevTodos,
        { id: Date.now(), text: todo, completed: false },
      ];
      setItemsRemaining(newTodos.filter((todo) => !todo.completed).length);
      setTodo("");
      return newTodos;
    });
  }
  function handleAddTodoList(e) {
    if (e.key === "Enter") {
      addTodoList();
    }
  }

  function changeFilter(newFilter) {
    setFilter(newFilter);
  }

  const displayedTodos = todoList.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  function selectAllTodos() {
    setTodoList((prevTodos) => {
      let changesMade = false;
      const newTodos = prevTodos.map((todo) => {
        if (!todo.completed) {
          changesMade = true;
          return { ...todo, completed: true };
        }
        return todo;
      });
      if (changesMade) setItemsRemaining(0);
      return newTodos;
    });
  }

  return (
    <div className="input-container">
      <input
        className={isDarkMode ? "todos" : "todos-light-mode"}
        onChange={handleInputChange}
        onKeyDown={handleAddTodoList}
        placeholder="Create a new todo..."
        type="text"
        value={todo}
      />
      {todoList.length > 0 && (
        <div
          className={
            isDarkMode
              ? "list-container"
              : "list-container list-container-light-mode"
          }
        >
          <TodoList
            items={displayedTodos}
            removeTodo={removeTodo}
            toggleCompletion={toggleCompletion}
            isDarkMode={isDarkMode}
          />
          <Footer
            itemsRemaining={itemsRemaining}
            showAllTodos={() => changeFilter("all")}
            showActiveTodos={() => changeFilter("active")}
            showCompletedTodos={() => changeFilter("completed")}
            clearCompletedTodos={clearCompletedTodos}
            activeFilter={filter}
            selectAllTodos={selectAllTodos}
          />
        </div>
      )}
      {todoList.length < 1 && (
        <div className="img-div">
          <img className="addTodo-img" src="./notepad.webp" alt="notepad" />
          <p className="add-todos-title">Add some todos...</p>
        </div>
      )}
    </div>
  );
}

export default TodoEntryForm;
