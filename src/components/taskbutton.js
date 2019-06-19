import React from "react";
import "../App.css";

function TaskButton({ name, onClick }) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick(name);
      }}>
      Task
    </button>
  );
}

export default TaskButton;
