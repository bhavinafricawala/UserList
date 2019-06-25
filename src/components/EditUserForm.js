import React from "react";
import UserEditForm from "./UserEditForm";

function EditUserForm(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Edit User</h1>
        </div>
        <p>
          <UserEditForm
            onUserEdit={props.onUserEdit}
            onCancel={props.onCancel}
            id={props.id}
            name={props.name}
            email={props.email}
          />
        </p>
      </div>
    </div>
  );
}

export default EditUserForm;
