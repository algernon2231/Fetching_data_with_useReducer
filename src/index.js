import React from "react";
import ReactDOM from "react-dom";
import DataFetching from "./DataFetching";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <DataFetching />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
