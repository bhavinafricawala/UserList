import React from "react";
import { Link } from "react-browser-router";
import "../App.css";

const editUrl = "/edit";
const delUrl = "/delete";

function TaskButton(props) {
  return (
    <div>
      <Link
        to={`${editUrl}/${props.user.id}/${props.user.name}/${
          props.user.email
        }`}
        className="btn btn-success">
        Edit
      </Link>{" "}
      {"  "}
      <Link
        to={`${delUrl}/${props.user.id}/${props.user.name}`}
        className="btn btn-danger">
        Delete
      </Link>
    </div>
  );
}

export default TaskButton;
