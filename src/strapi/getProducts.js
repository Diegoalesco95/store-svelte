import { get } from '../utils/axios'

export default async () => {
  try {
    const response = await get('/products', {
      populate: '*',
    })
    if (response.data) {
      return response.data
    }
  } catch (error) {
    console.error(error);
    return null
  }
}