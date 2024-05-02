import { useState } from "react";
import "./App.css";
import "./style.css";
import Title from "./Title";
import TodoEntryForm from "./TodoEntryForm";

function App() {
  let [isDarkMode, setIsDarkMode] = useState(true);

  function showDarkMode() {
    setIsDarkMode(true);
  }

  function showLightMode() {
    setIsDarkMode(false);
  }
  return (
    <div
      className={isDarkMode ? "container" : "container container-light-mode"}
    >
      <Title
        showDarkMode={showDarkMode}
        showLightMode={showLightMode}
        isDarkMode={isDarkMode}
      />
      <TodoEntryForm isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
