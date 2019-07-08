export function getUsers() {
  var users;
  var xHttp = new XMLHttpRequest();
  xHttp.open("GET", "https://ba-todolistapi.herokuapp.com/api/values", false);
  xHttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");

  xHttp.onreadystatechange = function() {
    users = JSON.parse(xHttp.responseText);
  };
  xHttp.send();
  return users;
}

export function DeleteUser(id) {
  var xHttp = new XMLHttpRequest();

  xHttp.open(
    "DELETE",
    "https://ba-todolistapi.herokuapp.com/api/values/" + id,
    false
  );
  xHttp.onreadystatechange = function() {
    console.log("success");
  };
  xHttp.send();
}

export function AddUser(user) {
  var xHttp = new XMLHttpRequest();

  xHttp.open("POST", "https://ba-todolistapi.herokuapp.com/api/values", false);
  xHttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xHttp.onreadystatechange = function() {
    console.log("success");
  };
  xHttp.send(JSON.stringify(user));
}

export function UpdateUser(user) {
  var xHttp = new XMLHttpRequest();

  xHttp.open("PUT", "https://ba-todolistapi.herokuapp.com/api/values", false);
  xHttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xHttp.onreadystatechange = function() {
    console.log("success");
  };
  xHttp.send(JSON.stringify(user));
}

export function getMaxId(users) {
  if (users.length <= 0) return 1;
  return users.reduce((max, p) => (p.id > max ? p.id : max), users[0].id) + 1;
}

export function FindAndReplace(array, property, newuser) {
  console.log(newuser);
  array.forEach(function(result, index) {
    if (parseInt(result[property]) === parseInt(newuser.id)) {
      array.splice(index, 1, newuser);
    }
  });
}

export function FindAndRemove(array, property, deleteuser) {
  array.forEach(function(result, index) {
    if (parseInt(result[property]) === parseInt(deleteuser.id)) {
      array.splice(index, 1);
    }
  });
}
