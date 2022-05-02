import URL from './URL'

export default async () => {
  try {
    const response = await fetch(`${URL}/products`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    return null
  }
}