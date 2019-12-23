import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { List } from "./components/List";

function App() {
  const data = require("./data.json");
  return (
    <div className="App">
      <Header />
      <List data={data} />
    </div>
  );
}

export default App;
