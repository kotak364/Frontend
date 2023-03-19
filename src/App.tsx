import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  return (
    <div>
      <Todos items={["Learn React", "Learn Typescript"]} />
    </div>
  );
}

export default App;
