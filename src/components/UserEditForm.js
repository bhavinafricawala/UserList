import React, { useState } from "react";

function UserEditForm(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const user = { id: id, name: name, email: email };
    props.onUserEdit(user);
  };

  const onEditCancel = () => {
    props.onCancel();
  };

  const [id, setId] = useState(props.id);
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            className="form-control"
            disabled
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>{" "}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onEditCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UserEditForm;
