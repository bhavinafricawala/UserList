import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-browser-router";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import AddUserForm from "./components/AddUserForm";
import * as serviceWorker from "./serviceWorker";

let users = [
  { id: 1, name: "Jon", summary: "36 / Lead Developer" },
  { id: 2, name: "Janine Smith", summary: "32 / Senior Engineer" },
];

function getUsers() {
  var xHttp = new XMLHttpRequest();
  xHttp.open("GET", "https://jsonplaceholder.typicode.com/users", false);
  xHttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");

  xHttp.onreadystatechange = function() {
    users = JSON.parse(xHttp.responseText);
  };
  xHttp.send();
}

function getMaxY() {
  return users.reduce((max, p) => (p.id > max ? p.id : max), users[0].id) + 1;
}

const UserWraper = withRouter(({ history }) => (
  <AddUserForm
    onUserAdd={user => {
      users.push(user);
      history.push("/");
    }}
    onCancel={() => {
      history.push("/");
    }}
    maxId={getMaxY()}
  />
));

function render() {
  getUsers();
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" render={() => <App users={users} />} />
        <Route exact path="/add" component={UserWraper} />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
