import { writable, derived } from "svelte/store";
// import localCart from "../helpers/localCart";

const cart = writable(getStorageCart());

export const cartTotal = derived(cart, $cart => {
  let total = $cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  )
  return parseFloat(total.toFixed(2));
});

const remove = (id, items) => {
  return items.filter(item => item.id !== id);
}

const toggleAmount = (id, items, action) => {
  return items.map(item => {
    if (item.id === id) {
      if (action === "inc") {
        return {
          ...item,
          amount: item.amount + 1
        }
      }
      return {
        ...item,
        amount: item.amount - 1
      }
    }
    return { ...item };
  })
}

export const addItem = (itemToAdd) => {
  const { id, image, title, price } = itemToAdd;
  cart.update(items => {
    let itemIsAdded = items.find(item => id === item.id);
    if (itemIsAdded) {
      return toggleAmount(itemToAdd.id, items, "inc");
    }
    return [...items, { id, image, title, price, amount: 1 }];
  })
}

export const removeItem = (id) => {
  cart.update(items => {
    return remove(id, items);
  });
}

export const increaseAmount = (id) => {
  cart.update(items => {
    return toggleAmount(id, items, "inc");
  });
}

export const decreaseAmount = (id, amount) => {
  cart.update(items => {
    if (amount === 1) {
      return remove(id, items);
    }
    return toggleAmount(id, items, "dec");
  });
}

export const emptyCart = () => {
  cart.set([]);
  setStorageCart([]);
}


function getStorageCart() {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
}

export function setStorageCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default cart;