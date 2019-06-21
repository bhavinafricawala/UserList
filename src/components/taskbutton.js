import React from "react";
import { Link } from "react-browser-router";
import "../App.css";

function TaskButton(props) {
  return (
    <div>
      <Link to="/edit" className="btn btn-success">
        Edit
      </Link>{" "}
      {"  "}
      <Link to="delete" className="btn btn-danger">
        Delete
      </Link>
    </div>
  );
}

export default TaskButton;
