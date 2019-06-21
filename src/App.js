import React from "react";
import "./App.css";
import MyUsers from "./components/myusers";
import { Link } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div>
        <MyUsers users={props.users} />
        <p>
          <Link to="/add">Add an Author</Link>
        </p>
      </div>
    </div>
  );
}

export default App;
