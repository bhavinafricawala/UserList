import axios from "axios";
import { async } from "q";

export async function getUsers() {
  debugger;
  var response = await axios.get(
    "https://ba-todolistapi.herokuapp.com/api/values"
  );
  var users = response.data;
  return users;
}

export async function DeleteUser(id) {
  await axios.delete("https://ba-todolistapi.herokuapp.com/api/values/" + id);
}

export async function AddUser(user) {
  await axios.post("https://ba-todolistapi.herokuapp.com/api/values", user);
}

export async function EditUser(user) {
  await axios.put("https://ba-todolistapi.herokuapp.com/api/values", user);
}

export function getMaxId(users) {
  if (users.length <= 0) return 1;
  return users.reduce((max, p) => (p.id > max ? p.id : max), users[0].id) + 1;
}
