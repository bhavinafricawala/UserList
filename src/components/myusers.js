import UserRow from "./userrow";
import React from "react";
import "../App.css";

function MyUsers(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h1>My Users</h1>
      </div>
      <div className="card-body">
        <table className="table table-responsive table-striped">
          <thead>
            <tr>
              <th />
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map(user => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyUsers;
