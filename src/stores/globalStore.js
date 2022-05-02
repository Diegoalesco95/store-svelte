import { writable } from "svelte/store";

const globalStore = writable({
  sidebar: false,
  cart: false,
  alert: {
    show: false,
    message: "Default message",
    type: "success",
  },
});

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item, value) => {
    globalStore.update((storeValues) => ({ ...storeValues, [item]: value }));
  },
  setAlert: (alert) => {
    globalStore.update((storeValues) => ({ ...storeValues, alert }));
  }
};


export default store;