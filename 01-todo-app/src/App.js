import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import CounterUpDown from "./components/CounterUpDown";


import "./style.css"

function App() {
  return (
    <div className="todoContainer">
      <Header heading="Todo Application"/>
      <TodoItem text="Eat"/>
      <TodoItem completed={true} text="Code"/>
      <TodoItem text="sleep"/>
      <TodoItem text="code"/>
      <TodoItem text="Eat"/>
      <TodoItem completed={true} text="Repeat"/>
      <Button />
      <CounterUpDown/>
    </div>
  );
}

export default App;







