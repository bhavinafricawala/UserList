import React from "react";
import UserForm from "./UserForm";

function AddUserForm(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Add User</h1>
        </div>
        <p>
          <UserForm
            onUserAdd={props.onUserAdd}
            onCancel={props.onCancel}
            maxId={props.maxId}
          />
        </p>
      </div>
    </div>
  );
}

export default AddUserForm;
