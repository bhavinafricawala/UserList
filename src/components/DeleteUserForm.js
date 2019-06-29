import React, { useState } from "react";

function DeleteUserForm(props) {
  const [id] = useState(props.id);
  const [name] = useState(props.name);

  const handleSubmit = event => {
    event.preventDefault();
    const user = { id: id, name: name };
    props.onUserDelete(user);
  };

  const onDeleteCancel = () => {
    props.onCancel();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Edit User</h1>
        </div>
        <br />
        <p>
          <form onSubmit={handleSubmit}>
            <div className="alert alert-danger">
              Are you sure you want to delete <b>{name}</b>? {"   "}
            </div>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>{" "}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onDeleteCancel}>
              Cancel
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default DeleteUserForm;
