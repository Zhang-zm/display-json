import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "antd/dist/antd.css";
import DisplayComponent from "./components/Display";

function App() {
  return (
    <div className="App">
      <h1>Displsy JSON</h1>
      <DisplayComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
