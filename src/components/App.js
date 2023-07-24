import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable to hold the dark mode state, initialized to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle the toggle between dark and light mode
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle the state between true and false
  };

  // Use the isDarkMode state variable to conditionally set the appClass
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
