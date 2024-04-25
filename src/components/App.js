import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const [displayMode, setDisplayMode] = useState(false)
  
  const appClass = displayMode ? "App dark" : "App light"

  function handleDispModeChange() {
    setDisplayMode(!displayMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDispModeChange}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
