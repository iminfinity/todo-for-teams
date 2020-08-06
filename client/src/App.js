import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Todo from "./components/todo/todo.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Todo />
    </BrowserRouter>
  );
}

export default App;
