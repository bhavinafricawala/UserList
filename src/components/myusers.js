import UserRow from "./userrow";
import React from "react";
import "../App.css";

function MyUsers(props) {
  return (
    <div>
      <h1>My Users</h1>
      <div>
        <table className="user-list">
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
