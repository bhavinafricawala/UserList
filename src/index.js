import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, withRouter } from "react-browser-router";

import "./index.css";
import "./bootstrap.min.css";
import "./stickyfooter.css";
import App from "./App";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import DeleteUserForm from "./components/DeleteUserForm";
import {
  getUsers,
  getMaxId,
  FindAndReplace,
  FindAndRemove,
} from "./core/coreutil";
import * as serviceWorker from "./serviceWorker";

let users = [
  { id: 1, name: "Jon", summary: "36 / Lead Developer" },
  { id: 2, name: "Janine Smith", summary: "32 / Senior Engineer" },
];

const UserWraper = withRouter(props => (
  <AddUserForm
    onUserAdd={user => {
      users.push(user);
      props.history.push("/");
    }}
    onCancel={() => {
      props.history.push("/");
    }}
    maxId={getMaxId(users)}
  />
));

const EditUserWraper = withRouter(props => (
  <EditUserForm
    onUserEdit={user => {
      FindAndReplace(users, "id", user);
      props.history.push("/");
    }}
    onCancel={() => {
      props.history.push("/");
    }}
    id={props.match.params.id}
    name={props.match.params.name}
    email={props.match.params.email}
  />
));

const DeleteUserWraper = withRouter(props => (
  <DeleteUserForm
    onUserDelete={user => {
      FindAndRemove(users, "id", user);
      props.history.push("/");
    }}
    onCancel={() => {
      props.history.push("/");
    }}
    id={props.match.params.id}
    name={props.match.params.name}
  />
));

function render() {
  users = getUsers();
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h5 class="text-white h4">Collapsed content</h5>
              <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <Link
              to="/"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" />
            </Link>
          </nav>
        </div>

        <React.Fragment>
          <Route exact path="/" render={() => <App users={users} />} />
          <Route exact path="/add" component={UserWraper} />
          <Route path="/edit/:id/:name/:email" component={EditUserWraper} />
          <Route path="/delete/:id/:name" component={DeleteUserWraper} />
        </React.Fragment>
        <br />
        <footer class="footer">
          <div class="container">
            <span class="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </React.Fragment>{" "}
    </BrowserRouter>,
    document.getElementById("root")
  );
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
