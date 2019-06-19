import React from "react";
import "../App.css";

function TaskButton(props) {
  return (
    <button
      type="button"
      onClick={() => {
        props.onClick(props.user.name, props.user.summary);
      }}>
      Task
    </button>
  );
}

export default TaskButton;
