import axios from "axios";
import { async } from "q";
//http://localhost:65145/api/values

export async function getUsers() {
  var response = await axios.get(
    "https://ba-todolistapi.herokuapp.com/api/user"
  );
  var users = response.data;
  return users;
}

export async function DeleteUser(id) {
  await axios.delete("https://ba-todolistapi.herokuapp.com/api/user/" + id);
  //await axios.delete("http://localhost:65145/api/values/" + id);
}

export async function AddUser(user) {
  await axios.post("https://ba-todolistapi.herokuapp.com/api/user", user);
  //await axios.post("http://localhost:65145/api/values", user);
}

export async function EditUser(user) {
  await axios.put("https://ba-todolistapi.herokuapp.com/api/user", user);
  // await axios.put("http://localhost:65145/api/values", user);
}

export function getMaxId(users) {
  if (users.length <= 0) return 1;
  return users.reduce((max, p) => (p.id > max ? p.id : max), users[0].id) + 1;
}
