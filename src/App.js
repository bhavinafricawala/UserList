import React from "react";
import "./App.css";
import MyUsers from "./components/myusers";

function App(props) {
  return (
    <div className="App">
      <div>
        <MyUsers onTaskClick={props.onTaskClick} />
      </div>
    </div>
  );
}

export default App;
