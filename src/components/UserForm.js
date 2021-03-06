import React, { useState } from "react";

function UserForm(props) {
  const [id, setId] = useState(props.maxId);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const user = { id: id, name: name, email: email, password: password };
    props.onUserAdd(user);
  };

  const onAddCancel = () => {
    props.onCancel();
  };

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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>{" "}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onAddCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UserForm;
