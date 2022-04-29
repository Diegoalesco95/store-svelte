import { derived, writable } from "svelte/store";
import getProducts from "../strapi/getProducts";

function flattenProducts(data) {
  return data.map(({ id, attributes }) => {
    let image = ''

    return {
      id,
      ...attributes,
      image,
    };
  }
  );
}

const store = writable([]);

export const featuredStore = derived(store, ($featured) => $featured.filter(item => item.featured));

export async function setProducts() {
  const products = await getProducts();
  if (products) {
    const { data } = products;
    store.set(flattenProducts(data));
  }
}

export default store;