import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-browser-router";
import {
  getUsers,
  getMaxId,
  FindAndReplace,
  FindAndRemove,
} from "./core/coreutil";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import DeleteUserForm from "./components/DeleteUserForm";
import * as serviceWorker from "./serviceWorker";

let users = [
  { id: 1, name: "Jon", summary: "36 / Lead Developer" },
  { id: 2, name: "Janine Smith", summary: "32 / Senior Engineer" },
];

const UserWraper = withRouter(({ history }) => (
  <AddUserForm
    onUserAdd={user => {
      users.push(user);
      history.push("/");
    }}
    onCancel={() => {
      history.push("/");
    }}
    maxId={getMaxId(users)}
  />
));

const EditUserWraper = withRouter(({ history, match }) => (
  <EditUserForm
    onUserEdit={user => {
      FindAndReplace(users, "id", user);
      history.push("/");
    }}
    onCancel={() => {
      history.push("/");
    }}
    id={match.params.id}
    name={match.params.name}
    email={match.params.email}
  />
));

const DeleteUserWraper = withRouter(({ history, match }) => (
  <DeleteUserForm
    onUserDelete={user => {
      FindAndRemove(users, "id", user);
      history.push("/");
    }}
    onCancel={() => {
      history.push("/");
    }}
    id={match.params.id}
    name={match.params.name}
  />
));

function render() {
  users = getUsers();
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" render={() => <App users={users} />} />
        <Route exact path="/add" component={UserWraper} />
        <Route path="/edit/:id/:name/:email" component={EditUserWraper} />
        <Route path="/delete/:id/:name" component={DeleteUserWraper} />
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
