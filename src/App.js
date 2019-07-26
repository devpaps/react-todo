import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App(props) {
  return (
    <div className="w-full text-white">
      <header className="App-header overlay darken">
        <Todo />
      </header>
    </div>
  );
}

export default App;
