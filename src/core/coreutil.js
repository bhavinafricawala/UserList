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

export function getMaxId(users) {
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
