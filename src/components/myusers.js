import UserRow from "./userrow";
import React from "react";
import "../App.css";

function MyUsers(props) {
  const users = [
    { id: 1, name: "Jon", summary: "36 / Lead Developer" },
    { id: 2, name: "Janine Smith", summary: "32 / Senior Engineer" },
  ];
  return (
    <div>
      <h1>My Users</h1>
      <div>
        <table className="user-list">
          <tbody>
            {users.map(user => (
              <UserRow
                key={user.id}
                user={user}
                onTaskClick={props.onTaskClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyUsers;
