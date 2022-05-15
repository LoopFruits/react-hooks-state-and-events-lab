import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "./items";


function App() {

  const [isTone, setIsTone]= useState(false);
  const [items, setItems] = useState(itemData);
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  function handleToneClick(){
    setIsTone((isTone) => !isTone);
  }
  const appClass = isTone ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToneClick}>

        {isTone ? "Dark" : "Light"}          

           Mode
          
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
