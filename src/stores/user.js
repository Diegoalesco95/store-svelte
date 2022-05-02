import { writable } from "svelte/store";


function getStorageUser() {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return { user: null, jwt: null };
}

const userStore = writable(getStorageUser());

export function setStorageUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function setUser(user) {
  userStore.set(user);
}

export function logoutUser() {
  localStorage.removeItem("user");
  userStore.set({ user: null, jwt: null });
}

export default userStore