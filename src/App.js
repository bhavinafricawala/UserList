import React from "react";
import "./App.css";
import MyUsers from "./components/myusers";
import { Link } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <MyUsers users={props.users} />
        <p>
          <br />
          <Link to="/add" className="btn btn-primary">
            Add an Author
          </Link>
        </p>
      </div>
    </div>
  );
}

export default App;
