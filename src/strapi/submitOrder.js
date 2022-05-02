import { navigate } from 'svelte-routing'

import globalStore from '../stores/globalStore'
import { emptyCart } from '../stores/cart'

import { post } from '../utils/axios'

async function submitOrder(order) {
  const { userToken, ...restOrder } = order
  const response = await post('/orders', restOrder, 'Something went wrong while submitting your order', {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  })

  if (response.data) {
    console.log(response.data)
    globalStore.setAlert({
      show: true,
      message: 'Order submitted successfully',
      type: 'success',
    });
    emptyCart();
    navigate('/')
  } else {
    globalStore.setAlert({
      show: true,
      message: response.error.displayMsg,
      type: 'danger',
    });
  }
}

export default submitOrder
