import React from "react";
import UserForm from "./UserForm";

function AddUserForm(props) {
  return (
    <div className="AddUserForm">
      <h1>Add User</h1>
      <p>
        <UserForm onUserAdd={props.onUserAdd} />
      </p>
    </div>
  );
}

export default AddUserForm;
