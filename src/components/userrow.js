import React from "react";
import "../App.css";
import Avatar from "./avatar";
import TaskButton from "./taskbutton";

function UserRow(props) {
  return (
    <tr>
      <td className="avatar">
        <Avatar />
      </td>
      <td className="name">{props.user.name}</td>
      <td className="summary">{props.user.summary}</td>
      <td className="actions">
        <TaskButton user={props.user.name} />
      </td>
    </tr>
  );
}

export default UserRow;
