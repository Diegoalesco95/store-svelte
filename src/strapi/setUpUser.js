import { setStorageUser, setUser } from '../stores/user'


function setUpUser(user) {
  setUser(user);
  setStorageUser(user);
}

export default setUpUser